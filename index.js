const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



//User Questions:
// const questions = [{
//   type: 'input',
//   name: 'departmentStaff',
//   message: `What is the directory of this staff?`,
// },
// {
//   type: 'input',
//   name: 'employeeName',
//   message: `What is employee's name?`,
// },
// {
//   type: 'input',
//   name: 'employeeID',
//   message: `What is employee's id?`,
// },
// {
//   type: 'input',
//   name: 'employeeEmail',
//   message: `What is employee's email?`,
// },
// {
//   type: 'input',
//   name: 'managerOfficeNumber',
//   message: `What is employee's office number?`,
// },
// {
//   type: 'input',
//   name: 'engineerGithub',
//   message: `What is employee's Github?`,
// },
// {
//   type: 'input',
//   name: 'internSchool',
//   message: `What is employee's school?`,
// },
// {
//   type: 'list',
//   message: `What is the employee's position?`,
//   name: 'staffPosition',
//   choices: ['Manager', 'Engineer', 'Intern']
// },
// {
//   when: function (user) {
//     return user.staffPosition === 'Manager';
//   },
//   type: 'input',
//   name: 'test1',
//   message: 'Testing Manager',
// },
// {
//   when: function (user) {
//     return user.staffPosition === 'Engineer';
//   },
//   type: 'input',
//   name: 'test2',
//   message: 'Testing Engineer',
// },
// {
//   when: function (user) {
//     return user.staffPosition === 'Intern';
//   },
//   type: 'input',
//   name: 'test3',
//   message: 'Testing Intern',
// }];



// function init() {
//   inquirer.prompt(questions)
//     .then((responses) => {
//       const filename = `${responses.departmentStaff.toLowerCase().split(' ').join('')}.json`;
//       // TODO: Create a function to write README file
//       console.log(responses);
//       fs.writeFile(`index.html`, generateHTML(responses), (err) =>
//         err ? console.log(err) : console.log('Success!')
//       );
//     });
// }

// //Initialize application
// init();



//Main Questions Menu
let team = []; //*
const mainQuery = () => {
  inquirer.prompt({
    type: 'list',
    message: `What is the employee's position?`,
    name: 'staffPosition',
    choices: ['Manager', 'Engineer', 'Intern', 'Done']
  })

    .then(result => {
      switch (result.staffPosition) {
        case 'Manager':
          managerData()
          break;
        case 'Engineer':
          engineerData()
          break;
        case 'Intern':
          internData()
          break;
        case 'Done':
          console.log(team)
          fs.writeFile(`team.html`, generateHTML(team), (err) =>
            err ? console.log(err) : console.log('Success!'))
          break;
      }
    })
}


//Manager Questions
const managerData = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'employeeName',
    message: `What is employee's name?`,
  },
  {
    type: 'input',
    name: 'employeeID',
    message: `What is employee's id?`,
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: `What is employee's email?`,
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: `What is employee's office number?`,
  }])
    .then(result => {
      let manager = new Manager(result.employeeName, result.employeeID, result.employeeEmail, result.managerOfficeNumber);
      team.push(manager)
      mainQuery()
    })
}


//Engineer Questions
const engineerData = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'employeeName',
    message: `What is employee's name?`,
  },
  {
    type: 'input',
    name: 'employeeID',
    message: `What is employee's id?`,
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: `What is employee's email?`,
  },
  {
    type: 'input',
    name: 'gitHub',
    message: `What is employee's Github?`,
  }])
    .then(result => {
      let engineer = new Engineer(result.employeeName, result.employeeID, result.employeeEmail, result.gitHub);
      team.push(engineer)
      mainQuery()
    })
}

//Intern Questions
const internData = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'employeeName',
    message: `What is employee's name?`,
  },
  {
    type: 'input',
    name: 'employeeID',
    message: `What is employee's id?`,
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: `What is employee's email?`,
  },
  {
    type: 'input',
    name: 'school',
    message: `What is employee's school?`,
  }])
    .then(result => {
      let intern = new Intern(result.employeeName, result.employeeID, result.employeeEmail, result.school);
      team.push(intern)
      mainQuery()
    })
}



mainQuery();