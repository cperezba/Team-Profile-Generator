const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(fullName, id, email, gitHub) {
        super(fullName, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return 'Engineer'
    };
};

module.exports = Engineer;