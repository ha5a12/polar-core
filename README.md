
<div align="center">

# 🐻‍❄️ Polar

[![latest release](https://shields.io/github/v/release/ha5a12/polar-core)](v1.2.1)
</div>

Polar is a self-hosted DeFAI automation tool, offering an open-source solution to streamline token launches and wallet management. It includes:
* Automation for wallet creation, SOL distribution, and token launches.
* An OpenAPI interface for seamless integration with existing workflows.
* Compatibility with consumer-grade GPUs.

<p align="center">
  <a target="_blank" href="https://polardefai.com/"><img alt="Open Live Demo" src="https://img.shields.io/badge/OPEN_LIVE_DEMO-blue?logo=xcode&style=for-the-badge&logoColor=green"></a>
</p>

## 🔥 What's New
* **01/20/2025** Polar [v0.24.0-rc.1](https://github.com/ha5a12/polar-core/releases/tag/v0.24.0-rc.1) now supports Ethereum bridging! 🚀
* **01/17/2025** Multi-wallet SOL distribution introduced in Polar [v0.24.0-rc.0](https://github.com/ha5a12/polar-core/releases/tag/v0.24.0-rc.0).
* **01/09/2024** Polar [v0.23.0](https://github.com/ha5a12/polar-core/releases/tag/v0.23.0): The first stable release is live, featuring full wallet and token automation workflows.

## 👋 Getting Started

### Run Polar in 1 Minute
The easiest way to start a Polar server is by using the following Docker command:

```bash
docker run -it   --gpus all -p 8080:8080 -v $HOME/.polar:/data   ha5a12/polar-core   serve --network mainnet --device cuda
```

### 🔆 Activity

![Git Repository Activity](https://repobeats.axiom.co/api/embed/e4ef0fbd12e586ef9ea7d72d1fb4f5c5b88d78d5.svg "Repobeats analytics image")

## 🤝 Contributing

Check out the full guide at [CONTRIBUTING.md](https://github.com/ha5a12/polar-core/polar/blob/main/CONTRIBUTING.md).

### Get the Code

```bash
git clone --recurse-submodules https://github.com/ha5a12/polar-core/polar
cd polar
```

If you’ve already cloned the repository, run `git submodule update --recursive --init` to fetch all submodules.

### Build

1. Set up the Rust environment by following this [tutorial](https://www.rust-lang.org/learn/get-started).

2. Install the required dependencies:
```bash
# For MacOS
brew install protobuf

# For Ubuntu / Debian
apt install protobuf-compiler libopenblas-dev
```

3. Install additional tools:
```bash
# For Ubuntu
apt install make sqlite3 graphviz
```

4. Build Polar:
```bash
cargo build
```

### Start Hacking!
Don’t forget to submit a [Pull Request](https://github.com/ha5a12/polar-core/compare) when you’re ready.

## 🌍 Community
- 🎤 [Twitter](https://x.com/PolardotAI) - Follow for updates and tips.
