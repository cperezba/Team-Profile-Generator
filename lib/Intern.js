const Employee = require('./Employee');

class Intern extends Employee {
    constructor(fullName, id, email, school) {
        super(fullName, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(`I go to ${this.school}.`)
    }
    getRole() {
        return 'Intern'
    };
};

module.exports = Intern;
