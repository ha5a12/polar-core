CREATE TABLE integration_access_tokens(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    kind TEXT NOT NULL,
    display_name TEXT NOT NULL,
    access_token TEXT NOT NULL,
    error TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT (DATETIME('now')),
    synced_at TIMESTAMP NOT NULL DEFAULT (DATETIME('now'))
);

CREATE TABLE provided_repositories(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    integration_access_token_id INTEGER NOT NULL,
    vendor_id TEXT NOT NULL,
    name TEXT NOT NULL,
    git_url TEXT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT (DATETIME('now')),
    updated_at TIMESTAMP NOT NULL DEFAULT (DATETIME('now')),
    FOREIGN KEY (integration_access_token_id) REFERENCES integration_access_tokens(id) ON DELETE CASCADE,
    CONSTRAINT idx_unique_provider_id_vendor_id UNIQUE (integration_access_token_id, vendor_id)
);

INSERT INTO integration_access_tokens(kind, display_name, access_token)
    SELECT 'github', display_name, access_token FROM github_repository_provider WHERE access_token IS NOT NULL;

INSERT INTO integration_access_tokens(kind, display_name, access_token)
    SELECT 'gitlab', display_name, access_token FROM gitlab_repository_provider WHERE access_token IS NOT NULL;
