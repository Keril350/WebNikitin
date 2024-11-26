DROP DATABASE IF EXISTS e_shop_db;

CREATE DATABASE e_shop_db;
USE e_shop_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email varchar(50) NOT NULL UNIQUE,
    `password` varchar(255) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users_roles (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    `name` varchar(50),
    price DECIMAL NOT NULL,
    update_date DATE,
    `description` TEXT,
    `image` varchar(255),
    amount INT DEFAULT NULL,
    mark FLOAT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE marks (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    `value` INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE tags (
    id INT NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products_tags (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE delete_requests (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    `status` varchar(20),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO roles (name) VALUES ("user"), ("admin"); 
INSERT INTO products (name, price, description, image, amount) VALUES 
("Bpple iPhone 1", 300,  "Latest iPhone version. Apple.", "no_url", NULL),
("Apple iPhone 2", 300,  "Latest iPhone version. Apple.", NULL, 4),
("Rpple iPhone 3", 300,  "Latest iPhone version. Apple.", NULL, 13),
("Apple iPhone 4", 300,  "Latest iPhone version. Apple.", "no_url", NULL),
("Kpple iPhone 5", 300,  "Latest iPhone version. Apple.", NULL, 4),
("Ypple iPhone 6", 300,  "Latest iPhone version. Apple.",NULL, 24),
("Jpple iPhone 7", 300, "Latest iPhone version. Apple.", "no_url", 4),
("Ppple iPhone 8", 300, "Latest iPhone version. Apple.", "no_url", NULL),
("Vpple iPhone 9", 300, "Latest iPhone version. Apple.", "no_url", 7),
("Mpple iPhone 10", 300, "Latest iPhone version. Apple.", NULL, NULL),
("Qpple iPhone 11", 300, "Latest iPhone version. Apple.", "no_url", 2);



