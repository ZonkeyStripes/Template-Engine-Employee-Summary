const inquirer = require('inquirer');

const fs = require("fs")
const employee = require("./lib/employee")
const engineer = require("./lib/engineer")
const manager = require("./lib/manager")
const intern = require("./lib/intern")

const generate = require("./generate.js")

let something;
//main questions
const questions = [
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
]
// more employess question
const maybeQuestion = [
    {
        type: "confirm",
        name: "maybe",
        message: "Would you like to add more employees?"
    }
]
//Employee Object
const empObj = {
    Manager: [],
    Engineer: [],
    Intern: [],
};
//if they are engineer -
const enginQuestion = [
    {
        type: "input",
        name: "github",
        message: "Please provide the github username of the given Engineer:",
    }
]
//if Intern -
const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "Please provide the school of the Intern:",
    }
]
//if manager - 
const managerQuestion = [
    {
        type: "input",
        name: "officeNum",
        message: "Please provide the Office Number of given Manager:",
    }
]
//initial prompt function
function ask() {
    inquirer.prompt(questions).then(answers => {
        
        something = answers;

        if (answers.role === "Manager") {
            inquirer.prompt(managerQuestion).then(answers => {
                something.officeNum = answers.officeNum;
                empObj.Manager.push(something)
                console.log(empObj)
            })
        } else if (answers.role === "Engineer") {
            inquirer.prompt(enginQuestion).then(answers => {
                something.github = answers.github;
                empObj.Engineer.push(something)
                console.log(empObj)
        
            })
        } else if (answers.role === "Intern") {
            inquirer.prompt(internQuestion).then(answers => {
                something.school = answers.school;
                empObj.Intern.push(something)
                console.log(empObj)
            })
        }

    });//end first prompt
    // moreAsk();
}//end of function

function moreAsk() {
    inquirer.prompt(maybeQuestion).then(answer => {

        let x = generate(empObj);
        if (answer.maybe === true) {
            ask();
        } else {
            fs.writeFile('mainer.html', x, function (err) {
                if (err) throw err;
                console.log('Successfully created!');
            });
        }
    });//end second prompt
    console.log(empObj)
}

// let x = generate(empObj);
// fs.writeFile('mainer.html', x, function (err) {
//     if (err) throw err;
//     console.log('Successfully created!');
//   });

ask();

