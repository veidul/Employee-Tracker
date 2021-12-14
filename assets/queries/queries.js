const util = require("util");
const mysql = require('mysql2')
const {prompt} = require('inquirer');
const { table } = require("console");

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'employees'
})

const query = util.promisify(db.query).bind(db)


async function main(){
    const prompt = await mainMenu();
    switch(prompt.action) {
        case 'Add department':
            {const newDepartmentName = await getDepartmentInfo();
            await addDepartment(newDepartmentName);
            break;
        }

        case 'Add employee': {
            const newEmployee = await getAddEmployeeInfo();
            console.log("add an employee");
            console.log(newEmployee);
            await addEmployee(newEmployee);
            break;
        }

        case 'Add role': {
            const newRole = await getRoleInfo()
            console.log("add a role";)
            await addRole(newRole);
            break;
        }

        case 'Update employee role': {
            const employee = await getUpdateEmployeeRoleInfo();
            await updateEmployeeRole(employee);
            break;
            }   

        case 'View all departments': {
            await viewAllDepartments();
            break
        }

        case 'View all roles': {
            await viewAllRoles();
            break
        }

        case 'View all employees': {
            await viewAllEmployees();
            break
        }

        case 'Quit': {
            return
        }
                }
}
module.exports = queryManager;