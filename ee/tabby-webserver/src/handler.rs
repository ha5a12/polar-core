use std::sync::Arc;

use axum::{
    extract::State,
    http::Request,
    middleware::{from_fn_with_state, Next},
    routing, Extension, Json, Router,
};
use hyper::{Body, StatusCode};
use juniper_axum::{graphiql, graphql, playground};
use tabby_common::api::{
    code::CodeSearch,
    event::{EventLogger, RawEventLogger},
    server_setting::ServerSetting,
};
use tabby_db::DbConn;
use tracing::warn;

use crate::{
    cron, hub, oauth,
    public::new_event_logger,
    repositories::{self, RepositoryCache},
    schema::{create_schema, Schema, ServiceLocator},
    service::create_service_locator,
    ui,
};

pub struct WebserverHandle {
    db: DbConn,
    event_logger: Arc<dyn EventLogger>,
    raw_event_logger: Arc<dyn RawEventLogger>,
}

impl WebserverHandle {
    pub async fn new() -> Self {
        let db = DbConn::new().await.expect("Must be able to initialize db");
        let event_logger = Arc::new(new_event_logger(db.clone()));
        let raw_event_logger = Arc::new(new_event_logger(db.clone()));
        WebserverHandle {
            db,
            event_logger,
            raw_event_logger,
        }
    }

    pub fn logger(&self) -> Arc<dyn EventLogger> {
        self.event_logger.clone()
    }

    pub fn raw_logger(&self) -> Arc<dyn RawEventLogger> {
        self.raw_event_logger.clone()
    }

    pub async fn attach_webserver(
        &self,
        api: Router,
        ui: Router,
        logger: Arc<dyn RawEventLogger>,
        code: Arc<dyn CodeSearch>,
        is_chat_enabled: bool,
        local_port: u16,
    ) -> (Router, Router) {
        let ctx = create_service_locator(logger, code, self.db.clone(), is_chat_enabled).await;
        let events = cron::run_cron(ctx.auth(), ctx.job(), ctx.worker(), local_port).await;

        let repository_cache = RepositoryCache::new_initialized(ctx.repository(), &events).await;

        let schema = Arc::new(create_schema());
        let rs = Arc::new(repository_cache);

        let api = api
            .route(
                "/v1beta/server_setting",
                routing::get(server_setting).with_state(ctx.clone()),
            )
            // Routes before `distributed_tabby_layer` are protected by authentication middleware for following routes:
            // 1. /v1/*
            // 2. /v1beta/*
            .layer(from_fn_with_state(ctx.clone(), distributed_tabby_layer))
            .route(
                "/graphql",
                routing::post(graphql::<Arc<Schema>, Arc<dyn ServiceLocator>>)
                    .with_state(ctx.clone()),
            )
            .route("/graphql", routing::get(playground("/graphql", None)))
            .layer(Extension(schema))
            .route(
                "/hub",
                routing::get(hub::ws_handler).with_state(ctx.clone()),
            )
            .nest(
                "/repositories",
                repositories::routes(rs.clone(), ctx.auth()),
            )
            .nest("/oauth", oauth::routes(ctx.auth()));

        let ui = ui.route("/graphiql", routing::get(graphiql("/graphql", None)));

        let ui = ui.fallback(ui::handler);

        (api, ui)
    }
}

async fn distributed_tabby_layer(
    State(ws): State<Arc<dyn ServiceLocator>>,
    request: Request<Body>,
    next: Next<Body>,
) -> axum::response::Response {
    ws.worker().dispatch_request(request, next).await
}

async fn server_setting(
    State(locator): State<Arc<dyn ServiceLocator>>,
) -> Result<Json<ServerSetting>, StatusCode> {
    let security_setting = match locator.setting().read_security_setting().await {
        Ok(x) => x,
        Err(err) => {
            warn!("Failed to read security setting {}", err);
            return Err(StatusCode::INTERNAL_SERVER_ERROR);
        }
    };

    Ok(Json(ServerSetting {
        disable_client_side_telemetry: security_setting.disable_client_side_telemetry,
    }))
}
