use crate::schema::Result;
use async_trait::async_trait;
use chrono::{DateTime, Utc};
use juniper::{GraphQLEnum, GraphQLObject, ID};

#[derive(GraphQLObject)]
pub struct CompletionStats {
    pub start: DateTime<Utc>,
    pub end: DateTime<Utc>,

    pub num_completed: i32,
    pub num_accepted: i32,
}

#[derive(GraphQLEnum, Clone, Debug)]
pub enum Language {
    RUST,
    PYTHON,
    OTHER,
}

#[async_trait]
pub trait AnalyticService: Send + Sync {
    /// Generate the report for past year, with daily granularity.
    ///
    /// It contains activities for the whole instance, without any filter.
    async fn annual_activity(&self) -> Result<Vec<CompletionStats>>;

    /// Computes the report with daily granularity.
    ///
    /// 1. [`start`, `end`) define the time range for the report.
    /// 2. `users` is a list of user IDs. If empty, the report is computed for all users.
    /// 3. `languages` is a list of programming language identifier. If empty, the report is computed for all languages.
    async fn daily_report(
        &self,
        start: DateTime<Utc>,
        end: DateTime<Utc>,
        users: Vec<ID>,
        languages: Vec<Language>,
    ) -> Result<CompletionStats>;
}
