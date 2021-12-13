module.exports ={
    mainMenu:[
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Welcome to the employees_db main menu. What would you like to do?',
            choices: ['Add employee','Add department','Add role','View Department','View Roles' ]
        }
    ],



//called to add a department table in the employees database
    addDepartment:{
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department you would like to create?'
        },
    

    role:[
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
        }
    ]

}