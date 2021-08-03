const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



function generateHTML(data) {
    let team = [];

    //Render Manager HTML
    const renderManager = (data) => {
        return `<div class="card" style="width: 18rem; margin: 100px;">
    <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.fullName}, ID: ${data.id}</h6>
    <p class="card-text">Office Number: ${data.officeNumber}</p>
    <a href="mailto: ${data.email}" class="card-link">Email: ${data.email}</a>
    </div>
    </div>`
    }

    //Render Engineer HTML
    const renderEngineer = (data) => {
        return `
    <div class="card" style="width: 18rem; margin: 100px;">
    <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.fullName}, ID: ${data.id}</h6>
    <a href="https://github.com/${data.gitHub}"><p class="card-text">Github: ${data.gitHub}</p></a>
    <a href="mailto: ${data.email}" class="card-link">Email: ${data.email}</a>
    </div>
    </div>
    `
    }

    //Render Intern HTML
    const renderIntern = (data) => {
        return `
    <div class="card" style="width: 18rem; margin: 100px;">
    <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.fullName}, ID: ${data.id}</h6>
    <p class="card-text">Contributing School: ${data.school}</p>
    <a href="mailto: ${data.email}" class="card-link">Email: ${data.email}</a>
    </div>
    </div>
    `
    }


    //Merge Employee Types with Rendered HTML
    data.forEach(emp => {
        console.log(emp.getRole());
        if (emp.getRole() === 'Manager') {
            let manager = renderManager(emp);
            team.push(manager);
        } else if (emp.getRole() === 'Engineer') {
            let engineer = renderEngineer(emp);
            team.push(engineer);
        } else {
            let intern = renderIntern(emp);
            team.push(intern);
        }

    });
    console.log(team.join(''))



    //Render Full HTML
    return `
    <!doctype html>
    <html lang="en">

    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Staff Directory</title>
    </head>

    <body>
    <!-- Header Jumbotron -->
    <div class="jumbotron">
    <h1 class="display-4">Staff Directory</h1>
    </div>
    
    
    ${team.join('')}


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
        integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
        crossorigin="anonymous"></script>
    </body>
    <footer>
    <!-- Footer Jumbotron -->
    <div class="jumbotron" style="position: relative; top: 25px">

    </div>
    </footer>

    </html>
      `
};



module.exports = generateHTML;