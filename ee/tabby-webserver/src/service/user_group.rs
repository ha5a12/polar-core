use juniper::ID;
use tabby_db::DbConn;
use tabby_schema::user_group::{
    CreateUserGroupInput, UpsertUserGroupMembershipInput, UserGroup, UserGroupMembership,
    UserGroupService,
};
use tabby_schema::{AsID, AsRowid, Result};

use super::graphql_pagination_to_filter;

struct UserGroupServiceImpl {
    db: DbConn,
}

#[async_trait::async_trait]
impl UserGroupService for UserGroupServiceImpl {
    async fn list(
        &self,
        user_id: Option<&ID>,
    ) -> Result<Vec<UserGroup>> {
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
