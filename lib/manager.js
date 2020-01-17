const Employee = require("./employee")

class Manager extends Employee {
    constructor(officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    };

    getOfficeNum(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;