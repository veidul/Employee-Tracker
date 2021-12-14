const inquirer = require("inquirer");
const { addDepartment } = require("../../../assets/helpers/inquirer")

modules.exports = {
// gets information on the department you want to add
getDepartmentId(){
    return inquirer.prompt ([
        addDepartment
    ])
},
// adds department to the database
addDepartment(departmentInfo){
 const departmentName = departmentInfo.departmentName;
 let query = 'INSERT into department (name) Values (?)';
 let args = [departmentName];
 const rows = await db.query(query, args)
 console.log('Added department named ${departmentName}');
},
// gets the information on the employee you want to add
getAddEmployeeId(){
    const managers = await getManagerNames();
    const roles = await getRoles();
    return inquirer.prompt ([
        addEmployee
    ])
},
// adds employee to the database
addEmployee(employeeInfo){
    let roleId = await getRoleId(employeeInfo.role)
    let managerId = await getEmployeeId(employeeInfo.manager)
    const employeeName = employeeInfo.employeeName;
    let query = 'INSERT into employee (first_name, last_name, role_id, manager_id) Values (?)'
    let args = [employeeInfo.first_name, employeeInfo.last_name,roleId,managerId]
    const rows = await db.query(query, args);
    console.log(`Added employee ${employeeInfo.first_name} ${employeeInfo.last_name}.`)
},
// gets the info for the roleid you want to pass into employee
getRoleId(roleName){
    let query = 'SELECT * FROM role WHERE role.title=?'
    let args = [roleName];
    const roles = await db.query(query,args)
    return rows[0].id
},
//adds role to the database
addRole();
//gets the info for the employee you want to update
getUpdateEmployeeRoleInfo();
//updates the employee in the database
updateEmployeeRole();
//gives you table of all the departments
viewAllDepartments();
//gives you table of all the roles
viewAllRoles();
//gives you table of all the employees
viewAllEmployees();
getManagerNames()
getRoles()
}