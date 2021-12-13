const inquirer = require("inquirer");


//this function is called to add a department table in the employees database
function department() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department you would like to create?'
        },

    ])
}

function role() {
    inquirer.prompt([
        {type: 'input',
        name: 'roleName',
        message: 'What is the name of the role you would like to add?'},
    ])
}

//this function is called to add the employee table in the employees database
function employee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the first name of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name of the employee you would like to add?'
        },
        //need to pass in what department they are in and then find the roles.
        {
            type: 'list',
            name: 'roleId',
            message: 'Please choose the role you would like to give to the employee.',
            //need to make a way to access the department roles, then link the ids to department roles.
            choices: [departmentRoles],
            //need to find a way to see if manager exists.
            //if manager exists add manager.id to employee table
        }
    ])
}