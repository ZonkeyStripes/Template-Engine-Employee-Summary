const Employee = require("./employee");

class Engineer extends Employee {
    constructor(gitName){
        this.gitName = gitName;
    }

    getGithub(){
        console.log(this.gitName);
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;