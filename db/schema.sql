-- CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers 
(
	id int NOT NULL AUTO_INCREMENT, 
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false, 
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)

);