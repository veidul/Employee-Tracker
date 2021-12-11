--Creates department database and sets table params
DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30)
);


DROP DATABASE IF EXISTS role_db;
CREATE DATABASE role_db;

USE role_db;
--Creates role database and sets table params also links to department(id)
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary decimal,
    department_id INT,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
    ON DELETE SET NULLemployee
--Creates employee database and sets table params also links to role(id)
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
    IF title==manager THEN
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id=id,
    FOREIGN KEY(role_id,title)
    REFERENCES role(id,title)
    ON DELETE SET NULL

    END IF;

    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id=INT,
    FOREIGN KEY(role_id,title)
    REFERENCES role(id,title)
    ON DELETE SET NULL
);