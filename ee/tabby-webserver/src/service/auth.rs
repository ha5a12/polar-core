use anyhow::Result;
use argon2::{
    password_hash,
    password_hash::{rand_core::OsRng, SaltString},
    Argon2, PasswordHasher, PasswordVerifier,
};
use async_trait::async_trait;
use validator::Validate;

use super::db::DbConn;
use crate::schema::auth::{
    generate_jwt, validate_jwt, AuthenticationService, Claims, Invitation, RefreshTokenResponse,
    RegisterError, RegisterResponse, TokenAuthError, TokenAuthResponse, UserInfo,
    VerifyTokenResponse,
};

/// Input parameters for register mutation
/// `validate` attribute is used to validate the input parameters
///   - `code` argument specifies which parameter causes the failure
///   - `message` argument provides client friendly error message
///
#[derive(Validate)]
struct RegisterInput {
    #[validate(email(code = "email", message = "Email is invalid"))]
    #[validate(length(
        max = 128,
        code = "email",
        message = "Email must be at most 128 characters"
    ))]
    email: String,
    #[validate(length(
        min = 8,
        code = "password1",
        message = "Password must be at least 8 characters"
    ))]
    #[validate(length(
        max = 20,
        code = "password1",
        message = "Password must be at most 20 characters"
    ))]
    #[validate(must_match(
        code = "password1",
        message = "Passwords do not match",
        other = "password2"
    ))]
    password1: String,
    #[validate(length(
        min = 8,
        code = "password2",
        message = "Password must be at least 8 characters"
    ))]
    #[validate(length(
        max = 20,
        code = "password2",
        message = "Password must be at most 20 characters"
    ))]
    password2: String,
}

impl std::fmt::Debug for RegisterInput {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("RegisterInput")
            .field("email", &self.email)
            .field("password1", &"********")
            .field("password2", &"********")
            .finish()
    }
}

/// Input parameters for token_auth mutation
/// See `RegisterInput` for `validate` attribute usage
#[derive(Validate)]
struct TokenAuthInput {
    #[validate(email(code = "email", message = "Email is invalid"))]
    #[validate(length(
        max = 128,
        code = "email",
        message = "Email must be at most 128 characters"
    ))]
    email: String,
    #[validate(length(
        min = 8,
        code = "password",
        message = "Password must be at least 8 characters"
    ))]
    #[validate(length(
        max = 20,
        code = "password",
        message = "Password must be at most 20 characters"
    ))]
    password: String,
}

impl std::fmt::Debug for TokenAuthInput {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TokenAuthInput")
            .field("email", &self.email)
            .field("password", &"********")
            .finish()
    }
}

#[async_trait]
impl AuthenticationService for DbConn {
    async fn register(
        &self,
        email: String,
        password1: String,
        password2: String,
        invitation_code: Option<String>,
    ) -> std::result::Result<RegisterResponse, RegisterError> {
        let input = RegisterInput {
            email,
            password1,
            password2,
        };
        input.validate().map_err(|err| {
            let errors = err
                .field_errors()
                .into_iter()
                .flat_map(|(_, errs)| errs)
                .cloned()
                .collect();

            RegisterError::InvalidInput { errors }
        })?;

        let is_admin_initialized = self.is_admin_initialized().await?;
        if is_admin_initialized {
            let err = Err(RegisterError::InvalidInvitationCode);
            let Some(invitation_code) = invitation_code else {
                return err;
            };

            let Some(invitation) = self.get_invitation_by_code(&invitation_code).await? else {
                return err;
            };

            if invitation.email != input.email {
                return err;
            }
        };

        // check if email exists
        if self.get_user_by_email(&input.email).await?.is_some() {
            return Err(RegisterError::DuplicateEmail);
        }

        let Ok(pwd_hash) = password_hash(&input.password1) else {
            return Err(RegisterError::Unknown);
        };

        let id = self
            .create_user(input.email.clone(), pwd_hash, !is_admin_initialized)
            .await?;
        let user = self.get_user(id).await?.unwrap();

        let Ok(access_token) = generate_jwt(Claims::new(UserInfo::new(
            user.email.clone(),
            user.is_admin,
        ))) else {
            return Err(RegisterError::Unknown);
        };

        let resp = RegisterResponse::new(access_token, "".to_string());
        Ok(resp)
    }

    async fn token_auth(
        &self,
        email: String,
        password: String,
    ) -> std::result::Result<TokenAuthResponse, TokenAuthError> {
        let input = TokenAuthInput { email, password };
        input.validate().map_err(|err| {
            let errors = err
                .field_errors()
                .into_iter()
                .flat_map(|(_, errs)| errs)
                .cloned()
                .collect();

            TokenAuthError::InvalidInput { errors }
        })?;

        let Some(user) = self.get_user_by_email(&input.email).await? else {
            return Err(TokenAuthError::UserNotFound);
        };

        if !password_verify(&input.password, &user.password_encrypted) {
            return Err(TokenAuthError::InvalidPassword);
        }

        let Ok(access_token) = generate_jwt(Claims::new(UserInfo::new(
            user.email.clone(),
            user.is_admin,
        ))) else {
            return Err(TokenAuthError::Unknown);
        };

        let resp = TokenAuthResponse::new(access_token, "".to_string());
        Ok(resp)
    }

    async fn refresh_token(&self, _refresh_token: String) -> Result<RefreshTokenResponse> {
        Ok(RefreshTokenResponse::default())
    }

    async fn verify_token(&self, access_token: String) -> Result<VerifyTokenResponse> {
        let claims = validate_jwt(&access_token)?;
        let resp = VerifyTokenResponse::new(claims);
        Ok(resp)
    }

    async fn is_admin_initialized(&self) -> Result<bool> {
        let admin = self.list_admin_users().await?;
        Ok(!admin.is_empty())
    }

    async fn create_invitation(&self, email: String) -> Result<i32> {
        self.create_invitation(email).await
    }

    async fn list_invitations(&self) -> Result<Vec<Invitation>> {
        self.list_invitations().await
    }

    async fn delete_invitation(&self, id: i32) -> Result<i32> {
        self.delete_invitation(id).await
    }
}

fn password_hash(raw: &str) -> password_hash::Result<String> {
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let hash = argon2.hash_password(raw.as_bytes(), &salt)?.to_string();

    Ok(hash)
}

fn password_verify(raw: &str, hash: &str) -> bool {
    if let Ok(parsed_hash) = argon2::PasswordHash::new(hash) {
        let argon2 = Argon2::default();
        argon2.verify_password(raw.as_bytes(), &parsed_hash).is_ok()
    } else {
        false
    }
}

#[cfg(test)]
mod tests {
    use assert_matches::assert_matches;

    use super::*;

    #[test]
    fn test_password_hash() {
        let raw = "12345678";
        let hash = password_hash(raw).unwrap();

        assert_eq!(hash.len(), 97);
        assert!(hash.starts_with("$argon2id$v=19$m=19456,t=2,p=1$"));
    }

    #[test]
    fn test_password_verify() {
        let raw = "12345678";
        let hash = password_hash(raw).unwrap();

        assert!(password_verify(raw, &hash));
        assert!(!password_verify(raw, "invalid hash"));
    }

    static ADMIN_EMAIL: &str = "test@example.com";
    static ADMIN_PASSWORD: &str = "123456789";

    async fn create_admin_user(conn: &DbConn) -> i32 {
        conn.register(
            ADMIN_EMAIL.to_owned(),
            ADMIN_PASSWORD.to_owned(),
            ADMIN_PASSWORD.to_owned(),
            None,
        )
        .await
        .unwrap();
        1
    }

    #[tokio::test]
    async fn test_auth_token() {
        let conn = DbConn::new_in_memory().await.unwrap();
        assert_matches!(
            conn.token_auth(ADMIN_EMAIL.to_owned(), "12345678".to_owned())
                .await,
            Err(TokenAuthError::UserNotFound)
        );

        create_admin_user(&conn).await;

        assert_matches!(
            conn.token_auth(ADMIN_EMAIL.to_owned(), "12345678".to_owned())
                .await,
            Err(TokenAuthError::InvalidPassword)
        );

        assert!(conn
            .token_auth(ADMIN_EMAIL.to_owned(), ADMIN_PASSWORD.to_owned())
            .await
            .is_ok());
    }

    #[tokio::test]
    async fn test_invitation_flow() {
        let conn = DbConn::new_in_memory().await.unwrap();

        assert!(!conn.is_admin_initialized().await.unwrap());
        create_admin_user(&conn).await;

        let email = "user@user.com";
        let password = "12345678";

        conn.create_invitation(email.to_owned()).await.unwrap();
        let invitation = &conn.list_invitations().await.unwrap()[0];

        // Admin initialized, registeration requires a invitation code;
        assert_matches!(
            conn.register(
                email.to_owned(),
                password.to_owned(),
                password.to_owned(),
                None
            )
            .await,
            Err(RegisterError::InvalidInvitationCode)
        );

        // Invalid invitation code won't work.
        assert_matches!(
            conn.register(
                email.to_owned(),
                password.to_owned(),
                password.to_owned(),
                Some("abc".to_owned())
            )
            .await,
            Err(RegisterError::InvalidInvitationCode)
        );

        // Register success.
        assert!(conn
            .register(
                email.to_owned(),
                password.to_owned(),
                password.to_owned(),
                Some(invitation.code.clone())
            )
            .await
            .is_ok());

        // Try register again with same email failed.
        assert_matches!(
            conn.register(
                email.to_owned(),
                password.to_owned(),
                password.to_owned(),
                Some(invitation.code.clone())
            )
            .await,
            Err(RegisterError::DuplicateEmail)
        );
    }
}
