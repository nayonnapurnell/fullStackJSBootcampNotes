-- drop any old database and re-create it
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

-- changes the current database
USE books_db;

-- create the table biographies with column id and name
CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

