const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(fullName, id, email, gitHub) {
        super(fullName, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        console.log(`I go to ${this.school}.`)
    }
    getRole() {
        return 'Engineer'
    };
};

module.exports = Engineer;