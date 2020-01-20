const inquirer = require('inquirer');

const fs = require("fs")

const Employee = require("./lib/employee")

const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

const generate = require("./generateHTML.js")

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
        name: "gitName",
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
        name: "officeNumber",
        message: "Please provide the Office Number of given Manager:",
    }
]
//initial prompt function
function ask() {
    inquirer.prompt(questions).then(answers => {
        
        // something = answers;

        if (answers.role === "Manager") {
            inquirer.prompt(managerQuestion).then(answer => {
                let newManager = new Manager(answers.name, answers.id, answers.email, answer.officeNumber)
                // something.officeNum = answers.officeNum;
                empObj.Manager.push(newManager)
                console.log("Thanks!")
                console.log(empObj)
                moreAsk();
            })
        } else if (answers.role === "Engineer") {
            inquirer.prompt(enginQuestion).then(answer => {
                let newEngineer = new Engineer(answers.name, answers.id, answers.email, answer.gitName)
                // something.github = answers.github;
                empObj.Engineer.push(newEngineer)
                console.log("Thanks!")
                console.log(empObj)
                moreAsk();
            })
        } else if (answers.role === "Intern") {
            inquirer.prompt(internQuestion).then(answer => {
                let newIntern = new Intern(answers.name, answers.id, answers.email, answer.school)
                // something.school = answers.school;
                empObj.Intern.push(newIntern)
                console.log("Thanks!")
                console.log(empObj)
                moreAsk();
            })
        }
    });//end first prompt
}//end of function

function moreAsk() {
    inquirer.prompt(maybeQuestion).then(answer => {
        if (answer.maybe === true) {
            ask();
        } else {
            makeHtml();
        }
    });//end second prompt
}

function makeHtml(){
    
    let page = generate.mainBody();
    
    while(empObj.Manager.length != 0){
        let x = empObj.Manager.pop();
        page += generate.managerCard(x);
        console.log(x.name, x.id, x.email, x.officeNumber, x.role)
    }
    while(empObj.Engineer.length !=0){
        page += generate.enginCard(empObj.Engineer.pop())
    }
    while(empObj.Intern.pop.length != 0){
        page += generate.internCard(empObj.Intern.pop())
    }
    page += generate.foot();

    fs.writeFile('team.html', page, function (err) {
        if (err) throw err;
        console.log('Successfully created!');
    });
 }

ask();

