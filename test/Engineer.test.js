const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Carlos = new Engineer;


it('should return state of employement', () => {
    const result = Carlos.getRole();
    expect(result).toBe('Engineer');
});
