const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");




function generateHTML(data) {
    // console.log(data);
    let roleManager = [];
    let roleEngineer = [];
    let roleIntern = [];

    data.forEach(emp => {

        if (emp.getRole() === 'Manager') {
            roleManager.push(emp);
        } else if (emp.getRole() === 'Engineer') {
            roleEngineer.push(emp)
        } else {
            roleIntern.push(emp);
        }

        // console.log(roleManager);
        // console.log(roleEngineer);
        // console.log(roleIntern);
    })



    //Render Manager HTML
    const renderManager = (data) => {
        let renderedManagerCards = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.fullName}, ID: ${data.id}</h6>
    <p class="card-text">Office Number: ${data.officeNumber}</p>
    <a href="${data.email}" class="card-link">Email: ${data.email}</a>
    </div>
    </div>`
        return renderedManagerCards;
    }

    //Render Engineer HTML
    const renderEngineer = (data) => {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}, ID: ${data.id}</h6>
    <p class="card-text">Github: ${data.gitHub}</p>
    <a href="${data.email}" class="card-link">Email: ${data.email}</a>
    </div>
    </div>
    `
    }

    //Render Intern HTML
    const renderIntern = (data) => {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}, ID: ${data.id}</h6>
    <p class="card-text">Contributing School: ${data.school}</p>
    <a href="${data.email}" class="card-link">Email: ${data.email}</a>
    </div>
    </div>
    `
    }



    //Render Full HTML
    return `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Staff Directory</title>
  </head>
  <body>
    
   ${roleManager.forEach(Manager => renderManager(Manager))}


    
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};

// let Leah = new Manager('Leah', '1', 'leah@gmail.com', 'A37')
// let Christian = new Engineer('Christian', '3', 'christian@gmail.com', 'chery5')
// let Carlos = new Intern('Carlos', '7', 'me@me.com', 'Carvin');
// let data = [Leah, Christian, Carlos];

// generateHTML(data);

// ${renderEngineer(roleEngineer)}
// ${renderIntern(roleIntern)}
module.exports = generateHTML;