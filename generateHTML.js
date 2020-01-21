
function mainBody() { 
       return `
       <!DOCTYPE html>
       <html lang="en">
       
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta http-equiv="X-UA-Compatible" content="ie=edge">
           <script src="https://kit.fontawesome.com/087bbbd487.js" crossorigin="anonymous"></script>
           <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet">
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
               integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
       
           <title>Team Viewer</title>
           <style>
           body {
            font-family: 'Gelasio', serif;
        }

        h1 {
            color: white;
            text-align: center;
            padding: 3%;
            background-color: rgb(187, 42, 91);
        }
        .container {
            width: 90%;
        }

        .card {
            max-width: 250px;
            max-height: 350px;
            height: 100%;
            width: 100%;
            box-shadow: 10px 10px 5px grey;
            margin: 5%;
        }

        .card-title, .card-subtitle {
            color: whitesmoke;
            font-weight: bold;
        }

        .card-body {
            background-color: dodgerblue;
        }

        .list-group {
            color: black;
            padding-top: 10%;
            padding-bottom: 10%;
            padding-left: 5%;
            padding-right: 5%;
            background-color: rgba(116, 115, 115, 0.548);
        }
        </style>
       </head>
       
       <body>
           <header>
               <h1>
                   (>^o^)> The Team <(^-^<) </h1> 
               </header> 
               <div class="container">
                       <div class="row">
    `
    }
function foot(){
    return `
    </div>
    </div>
        </body>
            </html>
    `
    }

function managerCard(data){
let test = `

<div class="card col-3">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                      <p class="card-subtitle">
                      <i class="fas fa-mug-hot"></i> 
                            Manager</p>
                        </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${data.id}#</li>
                  <li class="list-group-item">Email: <a href="">${data.email}</a></li>
                  <li class="list-group-item">Office ID: ${data.officeNumber}</li>
                        </ul>
                      </div>
    `;
    return test;
}

function enginCard(data){
    return `
    <div class="card col-3">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
          <p class="card-subtitle">
          <i class="fas fa-glasses"></i>
            Engineer</p>
            </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}# </li>
      <li class="list-group-item">Email: <a href="">${data.email}</a></li>
      <li class="list-group-item">Github: <a href="https://www.github.com/${data.gitName}/">${data.gitName}</a></li>
            </ul>
          </div>
    `
}


function internCard(data){
    return `
    <div class="card col-3">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
          <p class="card-subtitle"><i class="fas fa-user-graduate"></i>
                  Intern</p>
            </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}# </li>
      <li class="list-group-item">Email: <a href="">${data.email}</a></li>
      <li class="list-group-item">School: ${data.school}</li>
            </ul>
          </div>
    `
}
module.exports = {
    mainBody: mainBody,
    foot: foot,
    internCard: internCard,
    enginCard: enginCard,
    managerCard: managerCard
};