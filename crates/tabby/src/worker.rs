use std::{
    env::consts::ARCH,
    net::{Ipv4Addr, SocketAddr},
    sync::Arc,
};

use axum::{routing, Router};
use clap::Args;
use graphql_client::{reqwest::post_graphql, GraphQLQuery};
use hyper::Server;

use tracing::{info, warn};

use crate::{
    fatal, routes,
    services::{
        chat::create_chat_service,
        health::{read_cpu_info, read_cuda_devices, HealthState},
        model::download_model_if_needed,
    },
    Device,
};

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "../../ee/tabby-webserver/graphql/schema.graphql",
    query_path = "./graphql/worker.query.graphql"
)]
pub struct RegisterWorker;

#[derive(Args)]
pub struct WorkerArgs {
    /// URL to register this worker to.
    #[clap(long)]
    url: String,

    /// Token to authenticate the worker.
    #[clap(long)]
    token: String,

    #[clap(long, default_value_t = 8080)]
    port: u16,

    /// Model id for `/v1beta/chat/completions` API endpoint.
    #[clap(long)]
    model: String,

    /// Device to run model inference.
    #[clap(long, default_value_t=Device::Cpu)]
    device: Device,

    /// Parallelism for model serving - increasing this number will have a significant impact on the
    /// memory requirement e.g., GPU vRAM.
    #[clap(long, default_value_t = 1)]
    parallelism: u8,
}

pub async fn chat(args: &WorkerArgs) {
    download_model_if_needed(&args.model).await;

    info!("Starting worker, this might takes a few minutes...");

    let state = Arc::new(create_chat_service(&args.model, &args.device, args.parallelism).await);

    let app = Router::new().route(
        "/v1beta/chat/completions",
        routing::post(routes::chat_completions).with_state(state),
    );

    let address = SocketAddr::from((Ipv4Addr::UNSPECIFIED, args.port));
    info!("Listening at {}", address);

    register(
        register_worker::WorkerKind::CHAT,
        args.url.clone(),
        args.token.clone(),
        args.port as i64,
        args.model.to_owned(),
        args.device.to_string(),
    )
    .await;
    Server::bind(&address)
        .serve(app.into_make_service())
        .await
        .unwrap_or_else(|err| fatal!("Error happens during serving: {}", err))
}

async fn register(
    kind: register_worker::WorkerKind,
    url: String,
    token: String,
    port: i64,
    name: String,
    device: String,
) {
    let client = reqwest::Client::new();
    let (cpu_info, cpu_count) = read_cpu_info();
    let cuda_devices = read_cuda_devices().unwrap_or_default();
    let variables = register_worker::Variables {
        token,
        port,
        kind,
        name,
        device,
        arch: ARCH.to_string(),
        cpu_info,
        cpu_count: cpu_count as i64,
        cuda_devices,
    };

    let url = format!("{}/graphql", url);
    match post_graphql::<RegisterWorker, _>(&client, &url, variables).await {
        Ok(x) => {
            let addr = x.data.unwrap().worker.addr;
            info!("Worker alive at {}", addr);
        }
        Err(err) => warn!("Failed to register worker: {}", err),
    }
}
