use std::env::consts::ARCH;

use anyhow::Result;
#[cfg(feature = "cuda")]
use nvml_wrapper::Nvml;
#[cfg(feature = "rocm")]
use rocm_smi_lib::error::RocmErr;
#[cfg(feature = "rocm")]
use rocm_smi_lib::RocmSmi;
use serde::{Deserialize, Serialize};
use sysinfo::{CpuExt, System, SystemExt};
use utoipa::ToSchema;

use crate::Device;

#[derive(Serialize, Deserialize, ToSchema, Clone, Debug)]
pub struct HealthState {
    #[serde(skip_serializing_if = "Option::is_none")]
    model: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    chat_model: Option<String>,
    device: String,
    arch: String,
    cpu_info: String,
    cpu_count: usize,
    gpu_devices: Vec<String>,
    #[deprecated(note = "Use the more generic gpu_devices instead")]
    cuda_devices: Vec<String>,
    version: Version,
}

impl HealthState {
    pub fn new(model: Option<&str>, chat_model: Option<&str>, device: &Device) -> Self {
        let (cpu_info, cpu_count) = read_cpu_info();

        let gpu_devices = match read_gpu_devices() {
            Ok(s) => s,
            Err(_) => vec![],
        };

        #[allow(deprecated)]
        Self {
            model: model.map(|x| x.to_owned()),
            chat_model: chat_model.map(|x| x.to_owned()),
            device: device.to_string(),
            arch: ARCH.to_string(),
            cpu_info,
            cpu_count,
            gpu_devices: gpu_devices.clone(),
            cuda_devices: gpu_devices,
            version: Version::new(),
        }
    }
}

pub fn read_cpu_info() -> (String, usize) {
    let mut system = System::new_all();
    system.refresh_cpu();
    let cpus = system.cpus();
    let count = cpus.len();
    let info = if count > 0 {
        let cpu = &cpus[0];
        cpu.brand().to_string()
    } else {
        "unknown".to_string()
    };

    (info, count)
}

#[cfg(feature = "cuda")]
pub fn read_gpu_devices() -> Result<Vec<String>> {
    // In cases of MacOS or docker containers where --gpus are not specified,
    // the Nvml::init() would return an error. In these scenarios, we
    // assign cuda_devices to be empty, indicating that the current runtime
    // environment does not support cuda interface.
    let nvml = Nvml::init()?;
    let mut cuda_devices = vec![];
    let device_count = nvml.device_count()?;
    for i in 0..device_count {
        let name = nvml.device_by_index(i)?.name()?;
        cuda_devices.push(name);
    }
    Ok(cuda_devices)
}

#[cfg(feature = "rocm")]
pub fn read_gpu_devices() -> Result<Vec<String>, RocmErr> {
    let rocm = RocmSmi::init()?;
    let mut rocm_devices = vec![];
    let device_count = rocm.get_device_count();
    for i in 0..device_count {
        let name = rocm.get_device_identifiers(i)?.name;
        rocm_devices.push(name);
    }
    Ok(rocm_devices)
}

#[cfg(not(any(feature = "cuda", feature = "rocm",)))]
pub fn read_gpu_devices() -> Result<Vec<String>> {
    Ok(vec![])
}

#[derive(Serialize, Deserialize, ToSchema, Clone, Debug)]
pub struct Version {
    build_date: String,
    build_timestamp: String,
    git_sha: String,
    git_describe: String,
}

impl Version {
    fn new() -> Self {
        Self {
            build_date: env!("VERGEN_BUILD_DATE").to_string(),
            build_timestamp: env!("VERGEN_BUILD_TIMESTAMP").to_string(),
            git_sha: env!("VERGEN_GIT_SHA").to_string(),
            git_describe: env!("VERGEN_GIT_DESCRIBE").to_string(),
        }
    }
}
