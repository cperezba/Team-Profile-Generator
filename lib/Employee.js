class Employee {
    constructor(fullName, id, email) {
        this.fullName = fullName;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Hi, my name is ${this.fullName}!`);
    }
    getId() {
        console.log(`My ID number is ${this.id}.`)
    }
    getEmail() {
        console.log(`You can contact me at ${this.email}.`)
    }
    getRole() {
        return 'Employee';
    };


};

module.exports = Employee;