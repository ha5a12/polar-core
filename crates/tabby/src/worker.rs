use std::{
    net::{Ipv4Addr, SocketAddr},
    sync::Arc,
    time::Duration,
};

use axum::{routing, Router};
use clap::Args;
use hyper::Server;
use tabby_common::usage;
use tokio::time::sleep;
use tracing::info;

use crate::{
    fatal, routes,
    services::{
        chat::{self, create_chat_service},
        health,
        model::{self, download_model_if_needed},
    },
    Device,
};

#[derive(Args)]
pub struct WorkerArgs {
    /// Model id for `/completions` API endpoint.
    #[clap(long)]
    model: String,

    #[clap(long, default_value_t = 8080)]
    port: u16,

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

    start_heartbeat("ChatWorkerHeartBeat", args);
    Server::bind(&address)
        .serve(app.into_make_service())
        .await
        .unwrap_or_else(|err| fatal!("Error happens during serving: {}", err))
}

fn start_heartbeat(name: &str, args: &WorkerArgs) {
    let state = health::HealthState::new(None, Some(&args.model), &args.device);

    let name = name.to_owned();
    tokio::spawn(async move {
        loop {
            usage::capture(&name, &state).await;
            sleep(Duration::from_secs(3000)).await;
        }
    });
}
