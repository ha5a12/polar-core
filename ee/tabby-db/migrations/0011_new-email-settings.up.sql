ALTER TABLE email_setting ADD COLUMN from_address VARCHAR(255);
ALTER TABLE email_setting ADD COLUMN encryption VARCHAR(255) NOT NULL DEFAULT 'STARTTLS';
ALTER TABLE email_setting ADD COLUMN auth_method VARCHAR(255) NOT NULL DEFAULT 'PLAIN';
