const random_button = document.getElementById('randomlyButton')
// Fonction qui lis le fichier JSON puis génere aléatoirement un projet
function randomlyGenerate() {
    const random_content = document.getElementById('random_content')
    fetch("/db.json").then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Choix aléatoire parmis les noms de clients dans db.json
    let Client_name = data.Client_name
    let randomClient = Math.floor(Math.random() * Client_name.length);

    // Choix aléatoire parmis les types d'entreprises dans db.json
    let Client_company = data.Client_company
    let randomCompany = Math.floor(Math.random() * Client_company.length);

    // Choix aléatoire parmis les deadline dans db.json
    let Client_deadLine = data.Client_deadLine
    let randomDeadline = Math.floor(Math.random() * Client_deadLine.length);

    // Choix aléatoire parmis les couleurs imposé dans db.json
    let Client_colorRequired = data.Client_colorRequired
    let randomColor = Math.floor(Math.random() * Client_colorRequired.length);

    // Choix aléatoire parmis les couleurs imposé dans db.json
    let Client_request = data.Client_request
    let randomRequest = Math.floor(Math.random() * Client_request.length);

    random_content.innerHTML = `
        <p><span class="client_name">Nom du client :</span> <span class="client_name_data">${Client_name[randomClient]}</span></p>
        <p><span class="client_company">Entreprise :</span> <span class="client_company_data">${Client_company[randomCompany]}</span></p>
        <p><span class="client_deadline">Délai maximum :</span> <span class="client_deadline_data">${Client_deadLine[randomDeadline]}</span></p>
        <p><span class="client_request">Commande :</span> <span class="client_request_data">${Client_request[randomRequest]}</span></p>
        <p><span class="client_color">Couleur imposé :</span> <span style="background-color:${Client_colorRequired[randomColor]};"><span class="client_color_data">${Client_colorRequired[randomColor]}</span></span></p>`
  })
}
randomlyGenerate()