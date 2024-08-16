-- Add up migration script here
CREATE TABLE web_documents(
     id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
     name VARCHAR(255) NOT NULL,
     url TEXT NOT NULL,
     is_preset BOOLEAN NOT NULL DEFAULT FALSE,
     created_at TIMESTAMP NOT NULL DEFAULT(DATETIME('now')),
     updated_at TIMESTAMP NOT NULL DEFAULT(DATETIME('now')),
     CONSTRAINT idx_name UNIQUE(name),
     CONSTRAINT idx_url UNIQUE(url)
);
