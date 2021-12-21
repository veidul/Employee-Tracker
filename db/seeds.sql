INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Executive");
INSERT INTO department (name) VALUES ("Logistics");

INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead","95000","1");
INSERT INTO role (title, salary, department_id) VALUES ("Sales Manager","110000","1");
INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead","95000","1");
INSERT INTO role (title, salary, department_id) VALUES ("Sales Person","76000","1");

INSERT INTO role (title, salary, department_id) VALUES ("HR Manager","120000","2");
INSERT INTO role (title, salary, department_id) VALUES ("HR Specialist","100000","2");
INSERT INTO role (title, salary, department_id) VALUES ("HR Assistant","80000","2");

INSERT INTO role (title, salary, department_id) VALUES ("Marketing Manager","140000","3");
INSERT INTO role (title, salary, department_id) VALUES ("Marketing Specialist","120000","3");
INSERT INTO role (title, salary, department_id) VALUES ("Marketing Employee","100000","3");

INSERT INTO role (title, salary, department_id) VALUES ("CEO","250000","4");
INSERT INTO role (title, salary, department_id) VALUES ("COO","200000","4");
INSERT INTO role (title, salary, department_id) VALUES ("CFO","200000","4");

INSERT INTO role (title, salary, department_id) VALUES ("Logistics Manager","105000","5");
INSERT INTO role (title, salary, department_id) VALUES ("Logistics Specialist","95000","5");
INSERT INTO role (title, salary, department_id) VALUES ("Logistics Person","95000","5");

INSERT INTO Employee (first_name, last_name, role_id) VALUES ("Jeff","Rivers","1");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Melody","Contreras","2","1");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Miracle","Valencia","3","1");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Conrad","Nixon","4","1");

INSERT INTO Employee (first_name, last_name, role_id) VALUES ("Darwin","Buckley","5");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Xiomara","Lucero","6","5");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Nina","Frank","7","5");

INSERT INTO Employee (first_name, last_name, role_id) VALUES ("Rayna","Flemings","8");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Reynaldo","Burgess","9","8");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Riya","Carr","10","8");

INSERT INTO Employee (first_name, last_name, role_id) VALUES ("Carlee","Ford","11");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Timothy","Curtis","12","11");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Chana","Sutton","13","11");

INSERT INTO Employee (first_name, last_name, role_id) VALUES ("Cara","Jennings","14");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Aria","Rollins","15","14");
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ("Paige","Stark","16","14");