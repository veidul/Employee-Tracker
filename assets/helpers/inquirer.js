module.exports ={
    mainMenu:[
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Welcome to the employees_db main menu. What would you like to do?',
            choices: ['Add Department','View All Departments','Add Role','View All Roles','Add Employee','View All Employees', 'Update Employee Role']
        }
    ],



//called to add a department table in the employees database
    addDepartment:{
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department you would like to create?'
        },
    

    addRole:[
        {type: 'input',
        name: 'roleName',
        message: 'What is the name of the role you would like to add?'},
        {type: 'input',
        name: 'salary',
        message: 'How much does this role get paid?'}
    ],


//this function is called to add the employee table in the employees database
    addEmployee:[
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
        {
            type: 'list',
            message: 'Select the employee\'s role',
            name: 'role',
            choices:[...roles]
        },
        {
            type: 'list',
            message: 'Select the employee\'s manager',
            name: 'manager',
            choices:[...managers, null]
        }
    ]

}