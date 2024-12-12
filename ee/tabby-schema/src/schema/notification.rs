use async_trait::async_trait;
use chrono::{DateTime, Utc};
use juniper::{GraphQLEnum, GraphQLObject, ID};

use crate::Result;

#[derive(GraphQLEnum, Clone, Debug)]
pub enum NotificationRecipient {
    Admin,
    AllUser,
}

#[derive(GraphQLObject)]
pub struct Notification {
    pub id: ID,
    pub content: String,
    pub read: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[async_trait]
pub trait NotificationService: Send + Sync {
    async fn list(&self, user_id: &ID) -> Result<Vec<Notification>>;

    async fn mark_read(&self, user_id: &ID, id: Option<ID>) -> Result<()>;
}
