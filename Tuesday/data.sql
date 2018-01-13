DROP DATABASE IF EXISTS sql_hwkDB;

CREATE DATABASE sql_hwkDB;

USE sql_hwkDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  items VARCHAR(45) NULL,
  price DECIMAL(10) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO  (items, price, quantity)
VALUES ("hammock", 50, 100);

INSERT INTO products (items, price, quantity)
VALUES ("x-box", 200, 120);

INSERT INTO products (items, price, quantity)
VALUES ("flashlight", 30, 75);

INSERT INTO products (items, price, quantity)
VALUES ("candle", 5, 200);

INSERT INTO products (items, price, quantity)
VALUES ("watch", 100, 75);

INSERT INTO products (items, price, quantity)
VALUES ("luggage", 80, 45);

INSERT INTO products (items, price, quantity)
VALUES ("firewood", 10, 20);

INSERT INTO products (items, price, quantity)
VALUES ("computert", 500, );

INSERT INTO products (items, price, quantity)
VALUES ("tv", 400, 120);

INSERT INTO products (items, price, quantity)
VALUES ("stuffed animal", 15, 200);