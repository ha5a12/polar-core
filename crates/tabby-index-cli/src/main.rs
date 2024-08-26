mod commands;
mod timer;

use std::path::{Path, PathBuf};

use clap::{Parser, Subcommand};
use commands::BenchArgs;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
#[command(propagate_version = true)]
struct Cli {
    #[command(subcommand)]
    command: Commands,

    /// Path to the index directory
    #[clap(short, long)]
    index_dir: Option<PathBuf>,
}

#[derive(Subcommand)]
pub enum Commands {
    Inspect,
    Bench(BenchArgs),
}

fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();
    let index_dir = cli.index_dir.unwrap_or(tabby_common::path::index_dir());

    match cli.command {
        Commands::Inspect => {
            commands::run_inspect_cli(&index_dir)?;
        }
        Commands::Bench(args) => {
            commands::run_bench_cli(&index_dir, &args).map_err(|e| anyhow::anyhow!("{}", e))?;
        }
    };

    Ok(())
}
