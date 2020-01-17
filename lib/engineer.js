const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitName){
        super(name, id, email)
        this.gitName = gitName;
    }

    getGithub(){
        return this.gitName;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;