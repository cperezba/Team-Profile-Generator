const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')
const Carlos = new Intern;


it('should return state of employement', () => {
    const result = Carlos.getRole();
    expect(result).toBe('Intern');
});
