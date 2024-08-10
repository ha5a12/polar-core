use crate::DbConn;
use anyhow::{bail, Result};
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::{query, query_as, types::Json, FromRow};

#[derive(FromRow)]
pub struct ThreadDAO {
    pub id: i64,
    pub user_id: i64,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(sqlx::FromRow)]
pub struct ThreadMessageDAO {
    pub id: i64,
    pub thread_id: i64,

    pub role: String,
    pub content: String,

    pub code_attachments: Option<Json<Vec<ThreadMessageAttachmentCode>>>,
    pub doc_attachments: Option<Json<Vec<ThreadMessageAttachmentDoc>>>,

    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Serialize, Deserialize)]
pub struct ThreadMessageAttachmentDoc {
    pub title: String,
    pub link: String,
    pub content: String,
}

#[derive(Serialize, Deserialize)]
pub struct ThreadMessageAttachmentCode {
    pub filepath: Option<String>,
    pub content: String,
}

impl DbConn {
    pub async fn create_thread(&self, user_id: i64) -> Result<i64> {
        let res = query!("INSERT INTO threads(user_id) VALUES (?)", user_id)
            .execute(&self.pool)
            .await?;

        Ok(res.last_insert_rowid())
    }

    pub async fn get_thread(&self, id: i64) -> Result<Option<ThreadDAO>> {
        let thread = query_as!(
            ThreadDAO,
            r#"SELECT
                id,
                user_id,
                created_at as "created_at: DateTime<Utc>",
                updated_at as "updated_at: DateTime<Utc>"
            FROM threads WHERE id = ?"#,
            id
        )
        .fetch_optional(&self.pool)
        .await?;

        Ok(thread)
    }

    pub async fn create_thread_message(
        &self,
        thread_id: i64,
        role: &str,
        content: &str,
        code_attachments: Option<Vec<ThreadMessageAttachmentCode>>,
        doc_attachments: Option<Vec<ThreadMessageAttachmentDoc>>,
        verify_last_message_role: bool,
    ) -> Result<i64> {
        if verify_last_message_role {
            let last_message = self.get_last_thread_message(thread_id).await?;
            if let Some(last_message) = last_message {
                if last_message.role == role {
                    bail!("Cannot send two messages in a row with the same role");
                }
            }
        }

        let code_attachments = code_attachments.map(Json);
        let doc_attachments = doc_attachments.map(Json);
        let res = query!(
            "INSERT INTO thread_messages(thread_id, role, content, code_attachments, doc_attachments) VALUES (?, ?, ?, ?, ?)",
            thread_id,
            role,
            content,
            code_attachments,
            doc_attachments,
        )
        .execute(&self.pool)
        .await?;

        Ok(res.last_insert_rowid())
    }

    async fn get_last_thread_message(&self, thread_id: i64) -> Result<Option<ThreadMessageDAO>> {
        let message = query_as!(
            ThreadMessageDAO,
            r#"SELECT
                id,
                thread_id,
                role,
                content,
                code_attachments as "code_attachments: Json<Vec<ThreadMessageAttachmentCode>>",
                doc_attachments as "doc_attachments: Json<Vec<ThreadMessageAttachmentDoc>>",
                created_at as "created_at: DateTime<Utc>",
                updated_at as "updated_at: DateTime<Utc>"
            FROM thread_messages
            WHERE thread_id = ?
            ORDER BY id DESC
            LIMIT 1"#,
            thread_id
        )
        .fetch_optional(&self.pool)
        .await?;

        Ok(message)
    }

    pub async fn get_thread_messages(&self, thread_id: i64) -> Result<Vec<ThreadMessageDAO>> {
        let messages = query_as!(
            ThreadMessageDAO,
            r#"SELECT
                id,
                thread_id,
                role,
                content,
                code_attachments as "code_attachments: Json<Vec<ThreadMessageAttachmentCode>>",
                doc_attachments as "doc_attachments: Json<Vec<ThreadMessageAttachmentDoc>>",
                created_at as "created_at: DateTime<Utc>",
                updated_at as "updated_at: DateTime<Utc>"
            FROM thread_messages
            WHERE thread_id = ?
            ORDER BY id ASC"#,
            thread_id
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(messages)
    }
}
