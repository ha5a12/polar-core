use async_trait::async_trait;
use juniper::ID;
use tabby_db::DbConn;
use tabby_schema::{
    notification::{Notification, NotificationService},
    AsRowid, Result,
};

struct NotificationServiceImpl {
    db: DbConn,
}

pub fn create(db: DbConn) -> impl NotificationService {
    NotificationServiceImpl { db }
}

#[async_trait]
impl NotificationService for NotificationServiceImpl {
    async fn list(&self, user_id: &ID) -> Result<Vec<Notification>> {
        let notifications = self
            .db
            .list_notifications_within_7days(user_id.as_rowid().unwrap())
            .await?;
        Ok(notifications.into_iter().map(|n| n.into()).collect())
    }

    async fn mark_read(&self, user_id: &ID, id: Option<ID>) -> Result<()> {
        if let Some(id) = id {
            self.db
                .mark_notification_read(id.as_rowid().unwrap(), user_id.as_rowid().unwrap())
                .await?;
        } else {
            self.db
                .mark_all_notifications_read_by_user(user_id.as_rowid().unwrap())
                .await?;
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use juniper::ID;
    use tabby_db::DbConn;
    use tabby_schema::{notification::NotificationService, AsID};

    #[tokio::test]
    async fn test_notification_admin_list() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, true, None)
            .await
            .unwrap()
            .as_id();
        let notification_id = db
            .create_notification("admin", "admin_list")
            .await
            .unwrap()
            .as_id();

        let notifications = service.list(&user_id).await.unwrap();
        assert_eq!(notifications.len(), 1);
        assert_eq!(notifications[0].id, ID::from(notification_id));
        assert_eq!(notifications[0].content, "admin_list");
        assert_eq!(notifications[0].read, false);
    }

    #[tokio::test]
    async fn test_notification_admin_list_read() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, true, None)
            .await
            .unwrap();
        let notification_id = db
            .create_notification("admin", "admin_list_read")
            .await
            .unwrap();
        db.mark_notification_read(notification_id, user_id)
            .await
            .unwrap();

        let notifications = service.list(&user_id.as_id()).await.unwrap();
        assert_eq!(notifications.len(), 1);
        assert_eq!(notifications[0].id, notification_id.as_id());
        assert_eq!(notifications[0].content, "admin_list_read");
        assert_eq!(notifications[0].read, true);
    }

    #[tokio::test]
    async fn test_notification_admin_list_all() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, true, None)
            .await
            .unwrap()
            .as_id();
        db.create_notification("admin", "admin_list")
            .await
            .unwrap()
            .as_id();
        db.create_notification("all_user", "admin_list_all_user")
            .await
            .unwrap()
            .as_id();

        let notifications = service.list(&user_id).await.unwrap();
        assert_eq!(notifications.len(), 2);
        assert_eq!(notifications[0].content, "admin_list");
        assert_eq!(notifications[0].read, false);
        assert_eq!(notifications[1].content, "admin_list_all_user");
        assert_eq!(notifications[1].read, false);
    }

    #[tokio::test]
    async fn test_notification_admin_mark_all_read_admin() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, true, None)
            .await
            .unwrap()
            .as_id();
        db.create_notification("admin", "admin_list").await.unwrap();

        service.mark_read(&user_id, None).await.unwrap();
        let notifications = service.list(&user_id).await.unwrap();
        assert_eq!(notifications.len(), 1);
        assert_eq!(notifications[0].read, true);
    }

    #[tokio::test]
    async fn test_notification_admin_mark_read_twice() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, true, None)
            .await
            .unwrap()
            .as_id();
        let notification_id = db
            .create_notification("admin", "admin_list")
            .await
            .unwrap()
            .as_id();

        service
            .mark_read(&user_id, Some(notification_id.clone()))
            .await
            .unwrap();
        let notifications = service.list(&user_id).await.unwrap();
        assert_eq!(notifications.len(), 1);
        assert_eq!(notifications[0].read, true);

        assert!(service
            .mark_read(&user_id, Some(notification_id))
            .await
            .is_err())
    }

    #[tokio::test]
    async fn test_notification_admin_mark_all_read_twice() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, true, None)
            .await
            .unwrap()
            .as_id();
        db.create_notification("admin", "admin_list")
            .await
            .unwrap()
            .as_id();

        service.mark_read(&user_id, None).await.unwrap();
        let notifications = service.list(&user_id).await.unwrap();
        assert_eq!(notifications.len(), 1);
        assert_eq!(notifications[0].read, true);

        // mark all read will not return error even when call twice
        // but it should not create duplicated notifications
        service.mark_read(&user_id, None).await.unwrap();
        assert_eq!(notifications.len(), 1);
        assert_eq!(notifications[0].read, true);
    }

    #[tokio::test]
    async fn test_notification_admin_mark_all_read_admin_and_all_user() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, true, None)
            .await
            .unwrap()
            .as_id();
        db.create_notification("admin", "admin_list").await.unwrap();
        db.create_notification("all_user", "all_user")
            .await
            .unwrap();

        service.mark_read(&user_id, None).await.unwrap();
        let notifications = service.list(&user_id).await.unwrap();
        assert_eq!(notifications.len(), 2);
        assert_eq!(notifications[0].read, true);
        assert_eq!(notifications[1].read, true);
    }

    #[tokio::test]
    async fn test_notification_user_mark_all_read_admin_and_all_user() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone());

        let user_id = db
            .create_user("test".into(), None, false, None)
            .await
            .unwrap()
            .as_id();
        db.create_notification("admin", "admin_list").await.unwrap();
        db.create_notification("all_user", "all_user")
            .await
            .unwrap();

        service.mark_read(&user_id, None).await.unwrap();
        let notifications = service.list(&user_id).await.unwrap();
        assert_eq!(notifications.len(), 1);
        assert_eq!(notifications[0].read, true);
    }
}
