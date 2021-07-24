const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Carlos = new Manager;


it('should return state of employement', () => {
    const result = Carlos.getRole();
    expect(result).toBe('Manager');
});
