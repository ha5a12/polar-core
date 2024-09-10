use juniper::ID;
use tabby_db::DbConn;
use tabby_schema::{
    user_group::{
        CreateUserGroupInput, UpsertUserGroupMembershipInput, UserGroup, UserGroupMembership,
        UserGroupService,
    },
    AsID, AsRowid, Result,
};

struct UserGroupServiceImpl {
    db: DbConn,
}

#[async_trait::async_trait]
impl UserGroupService for UserGroupServiceImpl {
    async fn list(&self, user_id: Option<&ID>) -> Result<Vec<UserGroup>> {
        let user_id = user_id.map(|id| id.as_rowid()).transpose()?;

        Ok(self
            .db
            .list_user_groups(user_id)
            .await?
            .into_iter()
            .map(Into::into)
            .collect())
    }

    async fn create(&self, input: &CreateUserGroupInput) -> Result<ID> {
        let id = self.db.create_user_group(&input.name).await?;
        Ok(id.as_id())
    }

    async fn delete(&self, user_group_id: &ID) -> Result<()> {
        self.db.delete_user_group(user_group_id.as_rowid()?).await?;
        Ok(())
    }

    async fn list_membership(
        &self,
        user_group_id: &ID,
        user_id: Option<&ID>,
    ) -> Result<Vec<UserGroupMembership>> {
        let user_id = user_id.map(|id| id.as_rowid()).transpose()?;
        Ok(self
            .db
            .list_user_group_memberships(user_group_id.as_rowid()?, user_id)
            .await?
            .into_iter()
            .map(Into::into)
            .collect())
    }

    async fn upsert_membership(&self, input: &UpsertUserGroupMembershipInput) -> Result<()> {
        self.db
            .upsert_user_group_membership(
                input.user_id.as_rowid()?,
                input.user_group_id.as_rowid()?,
                input.is_group_admin,
            )
            .await?;
        Ok(())
    }
    async fn delete_membership(&self, user_group_id: &ID, user_id: &ID) -> Result<()> {
        self.db
            .delete_user_group_membership(user_id.as_rowid()?, user_group_id.as_rowid()?)
            .await?;
        Ok(())
    }
}

pub fn create(db: DbConn) -> impl UserGroupService {
    UserGroupServiceImpl { db }
}

#[cfg(test)]
mod tests {
    use tabby_db::testutils;

    use super::*;

    #[tokio::test]
    async fn test_list_user_groups() {
        // Create an in-memory database connection
        let db = DbConn::new_in_memory().await.unwrap();
        let svc = create(db.clone());

        // Insert test users into the database
        let user1 = testutils::create_user(&db).await.as_id();
        let user2 = testutils::create_user2(&db).await.as_id();

        // Insert test user groups associated with the users
        let user_group1 = svc
            .create(&CreateUserGroupInput {
                name: "group1".to_owned(),
            })
            .await
            .unwrap();
        let user_group2 = svc
            .create(&CreateUserGroupInput {
                name: "group2".to_owned(),
            })
            .await
            .unwrap();

        // Add user1 / user2 to user_group1
        svc.upsert_membership(&UpsertUserGroupMembershipInput {
            user_group_id: user_group1.clone(),
            user_id: user1.clone(),
            is_group_admin: true,
        })
        .await
        .unwrap();

        svc.upsert_membership(&UpsertUserGroupMembershipInput {
            user_group_id: user_group1.clone(),
            user_id: user2.clone(),
            is_group_admin: false,
        })
        .await
        .unwrap();

        // Add user2 to user_group2
        svc.upsert_membership(&UpsertUserGroupMembershipInput {
            user_group_id: user_group2.clone(),
            user_id: user2.clone(),
            is_group_admin: false,
        })
        .await
        .unwrap();

        // Test listing user groups as admin
        let result = svc.list(None).await.unwrap();
        assert_eq!(result.len(), 2);
        assert_eq!(result[0].id, user_group1);
        assert_eq!(result[1].id, user_group2);

        // Test listing user groups as user1
        let result = svc.list(Some(&user1)).await.unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result[0].id, user_group1);

        // Test listing user groups as user2
        let result = svc.list(Some(&user2)).await.unwrap();
        assert_eq!(result.len(), 2);
        assert_eq!(result[0].id, user_group1);
        assert_eq!(result[1].id, user_group2);

        // Test list user group membership as group admin
        let result = svc.list_membership(&user_group1, None).await.unwrap();
        assert_eq!(result.len(), 2);
        assert_eq!(result[0].user_id, user1);
        assert_eq!(result[1].user_id, user2);

        // Test list user group membership in user_group1 as user2
        let result = svc
            .list_membership(&user_group1, Some(&user2))
            .await
            .unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result[0].user_id, user2);
    }
}
