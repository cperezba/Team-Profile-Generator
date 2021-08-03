const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



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