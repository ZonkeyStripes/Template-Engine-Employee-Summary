const inquirer = require('inquirer');

inquirer
  .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the id # of the employee",
      },
      {
        type: "input",
        name: "email",
        message: "The email of given employee",
      },     
      {
        type: "list",
        name: "role",
        message: "Title of their role?",
        choices: ["Intern", "Engineer", "Manager"]
      },
  ])
  .then(answers => {
      

});