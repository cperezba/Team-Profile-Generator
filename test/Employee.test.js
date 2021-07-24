const Employee = require('../lib/Employee')
const Carlos = new Employee;


it('should return state of employement', () => {
    const result = Carlos.getRole();
    expect(result).toBe('Employee');
});
