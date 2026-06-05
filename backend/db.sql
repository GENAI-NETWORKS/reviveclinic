-- SQL Schema for Hostinger phpMyAdmin
-- Run this query to create the blog_posts table in your database

CREATE TABLE IF NOT EXISTS blog_posts (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    author VARCHAR(100),
    date VARCHAR(50),
    readTime VARCHAR(50),
    image LONGTEXT,
    excerpt TEXT,
    content LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
