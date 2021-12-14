--deleting employees database if it exists
DROP DATABASE IF EXISTS employees;
--creating database employees
CREATE DATABASE employees;




--selects employees database where the tables will be made
USE employees_db;
--Creates department table and sets table params
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30)
);

--Creates role table and sets table params also links to department(id)


CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary decimal,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

--Creates employee table and sets table params also links to role(id) for manager and role ids



CREATE TABLE employee (
    
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id=INT,
    FOREIGN KEY(role_id) REFERENCES role(id),
    FOREIGN KEY(manager_id) REFERENCES role(id)
    ON DELETE SET NULL

);