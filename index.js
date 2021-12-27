const { prompt } = require("inquirer")
const util = require('util')
const mysql = require('mysql2')
const table = require('console.table')


const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employees_db'
})
const query = util.promisify(db.query).bind(db);


async function main() {
    try {
        const response = await prompt([
            {
                type: 'list',
                name: 'mainMenu',
                message: 'Welcome to the employees_db main menu. What would you like to do?',
                choices: ['Add Department', 'Add Role', 'Add Employee','View All Departments','View All Roles', 'View All Employees', 'Update Employee Role', 'Exit'],
            }
        ])
        switch (response.mainMenu) {
            case 'Add Department': {
                const promptDept = await prompt({
                    type: 'input',
                    name: 'departmentName',
                    message: 'What is the name of the department you would like to create?'
                })
                query(`INSERT into department (name) VALUES('${promptDept.departmentName}');`)
                console.log(`${promptDept.departmentName} has been added to the department table!`)
                break;
            }

            case 'Add Role': {
                const resp = await query(`SELECT * FROM department`)
                const departmentsObj = (resp)
                const departments = []
                for (var i = 0; i < departmentsObj.length; i++) {
                    departments.push({ name: departmentsObj[i].name, value: departmentsObj[i].id })
                }

                const promptRole = await prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'What is the name of the role you would like to add?'
                    },
                    {
                        type: 'number',
                        name: 'salary',
                        message: 'How much does this role get paid?'
                    },
                    {
                        type: 'list',
                        name: 'departmentId',
                        choices: [...departments]
                    }
                ])
                query(`INSERT into role (title, salary, department_id) VALUES("${promptRole.title}",${promptRole.salary},${promptRole.departmentId});`)

                console.log(`${promptRole.title} has been added to the role table!`)
                break;
            }

            case 'Add Employee': {
                const resp = await query(`SELECT * FROM role`)
                const roleObj = (resp)
                const role = []
                for (var i = 0; i < roleObj.length; i++) {
                    role.push({ name: roleObj[i].title, value: roleObj[i].id })
                }
                const promptEmployee = await prompt([
                    {
                        type: 'input',
                        name: 'first_name',
                        message: 'What is the first name of the employee you would like to add?'
                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: 'What is the last name of the employee you would like to add?'
                    },
                    {
                        type: 'list',
                        name: 'role_id',
                        message: 'Select the role of the employee.',
                        choices: [...role]
                    },
                    {
                        type: 'input',
                        name: 'manager_id',
                        message: 'What is the Id of the manager?(if none leave blank)'
                    }
                ])
                if (promptEmployee.manager_id){
                    query(`INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("${promptEmployee.first_name}","${promptEmployee.last_name}",${promptEmployee.role_id},${promptEmployee.manager_id});`)
                    console.log(promptEmployee.first_name + " " + promptEmployee.last_name + " has been added to the employee table!")
                    break;
                }
                else {
                    query(`INSERT into employee (first_name, last_name, role_id) VALUES ("${promptEmployee.first_name}","${promptEmployee.last_name}",${promptEmployee.role_id});`)
                    console.log(promptEmployee.first_name + " " + promptEmployee.last_name + " has been added to the employee table!")
                    break;
                }
                
            }
            case 'View All Departments':{
                const resp = await query(`SELECT * FROM department;`)
                console.table(resp)
                break;
            }
            case 'View All Roles':{
                const resp = await query(`SELECT * FROM role LEFT JOIN department on role.department_id = department.id;`)
                const roleObj = (resp)
                const roles = []
                for (var i = 0; i < roleObj.length; i++) {
                    roles.push({ id: roleObj[i].id, title: roleObj[i].title, department: roleObj[i].name, salary: roleObj[i].salary   })
                }
                console.table(roles)
                break;
            }
            case 'View All Employees':{
                const resp = await query(`SELECT employee.id, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS Title,
                 department.name AS Department, CONCAT(manager.first_name,' ',manager.last_name) AS Manager, role.salary AS Salary FROM employee employee
                  INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id LEFT JOIN employee 
                  manager ON employee.manager_id = manager.id`)
                  console.table(resp)
                break;
            }
            case 'Update Employee Role':{
                const resp = await query(`SELECT role.id as id, role.title as title FROM role`)
                const roleObj = (resp)
                const roles = []
                for (var i = 0; i < roleObj.length; i++) {
                    roles.push({ name: roleObj[i].title, value: roleObj[i].id })
                }
                const promptUpdateEmployee = await prompt([
                    {
                        type: 'input',
                        name: 'ID',
                        message: 'What is the employee ID number you would like to update the role for?'
                    },
                   
                    {
                        type: 'list',
                        name: 'role_id',
                        message: 'Choose the role you would like to update for the employee',
                        choices: [...roles]
                    }
                ])
                query(`UPDATE employee SET employee.role_id = ${promptUpdateEmployee.role_id} WHERE employee.id = ${promptUpdateEmployee.ID};`)
                break;
            }

            case 'Exit': {
                return console.log("Exiting prompt!")
                
            }
        }


        main()
    }
    
    catch (err) { console.log(err); }

}


main();

