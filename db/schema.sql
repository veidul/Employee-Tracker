--deleting employees database if it exists
DROP DATABASE IF EXISTS employees;
--creating database employees
CREATE DATABASE employees;




--selects employees database where the tables will be made
USE employees_db;
--Creates department table and sets table params
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL
);

--Creates role table and sets table params also links to department(id)


CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary decimal NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
    ON DELETE SET NULL

--Creates employee table and sets table params also links to role(id)



CREATE TABLE employee (
    
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id=INT,
    FOREIGN KEY(role_id)
    REFERENCES role(id)
    ON DELETE SET NULL

);