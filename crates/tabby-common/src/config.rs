use std::{collections::HashSet, path::PathBuf};

use anyhow::{anyhow, Result};
use filenamify::filenamify;
use serde::{Deserialize, Serialize};

use crate::{path::repositories_dir, validate_identifier};

#[derive(Serialize, Deserialize, Default)]
pub struct Config {
    #[serde(default)]
    pub repositories: Vec<RepositoryConfig>,

    #[serde(default)]
    pub server: ServerConfig,
}

impl Config {
    pub fn load() -> Result<Self> {
        let cfg: Self = serdeconv::from_toml_file(crate::path::config_file().as_path())?;

        cfg.validate_names()?;

        Ok(cfg)
    }

    #[cfg(feature = "testutils")]
    pub fn save(&self) {
        serdeconv::to_toml_file(self, crate::path::config_file().as_path())
            .expect("Failed to write config file");
    }

    fn validate_names(&self) -> Result<()> {
        let mut names = HashSet::new();
        for repo in self.repositories.iter() {
            let name = repo.name();
            if !validate_identifier(&name) {
                return Err(anyhow!(
                    "Invalid characters in repository identifier: {}",
                    name
                ));
            }
            if !names.insert(repo.name()) {
                return Err(anyhow!("Duplicate name in `repositories`: {}", repo.name()));
            }
        }
        Ok(())
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct RepositoryConfig {
    #[serde(skip_serializing_if = "Option::is_none")]
    name: Option<String>,
    pub git_url: String,
}

impl RepositoryConfig {
    #[cfg(feature = "testutils")]
    pub fn new(git_url: String) -> Self {
        Self {
            name: None,
            git_url,
        }
    }

    pub fn new_named(name: String, git_url: String) -> Self {
        Self {
            name: Some(name),
            git_url,
        }
    }

    pub fn dir(&self) -> PathBuf {
        if self.is_local_dir() {
            let path = self.git_url.strip_prefix("file://").unwrap();
            path.into()
        } else {
            repositories_dir().join(self.name())
        }
    }

    pub fn is_local_dir(&self) -> bool {
        self.git_url.starts_with("file://")
    }

    pub fn name(&self) -> String {
        if let Some(name) = &self.name {
            name.clone()
        } else {
            filenamify(&self.git_url)
        }
    }
}

#[derive(Serialize, Deserialize)]
pub struct ServerConfig {
    /// The timeout in seconds for the /v1/completion api.
    pub completion_timeout: u64,
}

impl Default for ServerConfig {
    fn default() -> Self {
        Self {
            completion_timeout: 30,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::{Config, RepositoryConfig};

    #[test]
    fn it_parses_empty_config() {
        let config = serdeconv::from_toml_str::<Config>("");
        debug_assert!(config.is_ok(), "{}", config.err().unwrap());
    }

    #[test]
    fn it_parses_local_dir() {
        let repo = RepositoryConfig {
            name: None,
            git_url: "file:///home/user".to_owned(),
        };
        assert!(repo.is_local_dir());
        assert_eq!(repo.dir().display().to_string(), "/home/user");

        let repo = RepositoryConfig {
            name: None,
            git_url: "https://github.com/TabbyML/tabby".to_owned(),
        };
        assert!(!repo.is_local_dir());
    }

    #[test]
    fn test_repository_config_name() {
        let repo = RepositoryConfig {
            name: None,
            git_url: "https://github.com/TabbyML/tabby.git".to_owned(),
        };
        assert_eq!(repo.name(), "https_github.com_TabbyML_tabby.git");
    }
}
