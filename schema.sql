CREATE DATABASE photostudio;
USE photostudio;

CREATE TABLE solicitations (
  id INT(3) AUTO_INCREMENT PRIMARY KEY,
  firstname varchar(128) NOT NULL,
  lastname varchar(128) NOT NULL,
  email varchar(128) NOT NULL,
  total INT(3),
  desired_date date DEFAULT NULL,
  stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);