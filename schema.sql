DROP DATABASE IF EXISTS todoapp;

CREATE DATABASE todoapp;

USE todoapp;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  entryId INT,
  title VARCHAR(200),
  completed BOOLEAN,
  userId VARCHAR(20),
  PRIMARY KEY (entryId)
);