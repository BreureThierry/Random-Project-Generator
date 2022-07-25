
const DB = {
  "Client_name": 
  [
    "Jaques Richelieux", 
    "Fabrice Dubois", 
    "Enzo Enrico",
    "Fatiha Fida",
    "Dorene Meilleur",
    "Faustin Pinette",
    "Marlon Labrecque",
    "Claudette Bois",
    "Mujab Hadad",
    "Clothilde Desroches",
    "Matthieu Brousse",
    "Florence Vaillancourt",
    "Adrien Vernadeau",
    "Nicolas Barrière",
    "Matilda Godin",
    "Carine Gingras",
    "Rafidah Basara",
    "Julie Routhier",
    "Dexter Lereau",
    "Patricia Lemelin",
    "Laurent Duclot",
    "Astrid Frappier",
    "Alimah Sabbag",
    "Soren Lebel"
    ],
  "Client_company": 
  [
      "Electricien", 
      "Boulanger", 
      "Sandwicherie",
      "Salle de sport",
      "Boutique de vetement",
      "Boutique de montre",
      "Boutique de chaussure",
      "Boutique de livre",
      "Boutique de pêche",
      "Boutique de bricolage",
      "Photographe",
      "Réparateur électroménager",
      "Créateur de mode",
      "Musicien",
      "Apiculteur",
      "Vétérinaire",
      "Mannequin",
      "Informaticien",
      "Dévelopeur",
      "Mécanicien",
      "Centre equestre",
      "Brasseur",
      "Agence interim",
      "Artiste peintre"
    ],
  "Client_colorRequired": 
  [
      "#A7001E", 
      "#08C5D1", 
      "#93441A",
      "#F27438",
      "#7AA95C",
      "#226D68",
      "#FC4E00",
      "#06668C",
      "#226D68",
      "#BA327F",
      "#A6303F",
      "#5b300D"
    ],
  "Client_request": 
  [
      "Logo", 
      "Logo + Carte de visite",
      "Logo + Carte de visite + Affiche",
      "Affiche", 
      "Affiche + Carte de visite", 
      "Charte graphique + Logo",
      "Charte graphique + Logo + Carte de visite",
      "Carte de visite",
      "Carte de visite + Affiche"
    ],
  "Client_deadLine": 
  [ 
      "2 jours",
      "3 jours",
      "4 jour",
      "5 jours",
      "6 jours",
      "1 semaine",
      "2 semaine",
      "3 semaine"
    ]
}

const random_button = document.getElementById('randomlyButton')
const random_content = document.getElementById('random_content')

// Fonction qui lis l'objet DB puis génere aléatoirement un projet 
function randomlyGenerate() {
    // Choix aléatoire parmis les noms de clients dans l'objet DB
    let Client_name = DB.Client_name
    let randomClient = Math.floor(Math.random() * Client_name.length);
    // Choix aléatoire parmis les types d'entreprises dans l'objet DB
    let Client_company = DB.Client_company
    let randomCompany = Math.floor(Math.random() * Client_company.length);
    // Choix aléatoire parmis les deadline dans l'objet DB
    let Client_deadLine = DB.Client_deadLine
    let randomDeadline = Math.floor(Math.random() * Client_deadLine.length);
    // Choix aléatoire parmis les couleurs imposé dans l'objet DB
    let Client_colorRequired = DB.Client_colorRequired
    let randomColor = Math.floor(Math.random() * Client_colorRequired.length);
    // Choix aléatoire parmis les requêtes dans l'objet DB
    let Client_request = DB.Client_request
    let randomRequest = Math.floor(Math.random() * Client_request.length);
    // Envoi le résultat généré dans l'élement HTML
    random_content.innerHTML = `
        <p><span class="client_name">Nom du client :</span> <span value="${Client_name[randomClient]}" class="client_name_DB">${Client_name[randomClient]}</span></p>
        <p><span class="client_company">Entreprise :</span> <span value="${Client_company[randomCompany]}" class="client_company_DB">${Client_company[randomCompany]}</span></p>
        <p><span class="client_deadline">Délai maximum :</span> <span value="${Client_deadLine[randomDeadline]}" class="client_deadline_DB">${Client_deadLine[randomDeadline]}</span></p>
        <p><span class="client_request">Commande :</span> <span value="${Client_request[randomRequest]}" class="client_request_DB">${Client_request[randomRequest]}</span></p>
        <p><span class="client_color">Couleur imposée :</span> <span value="${Client_colorRequired[randomColor]}" style="background-color:${Client_colorRequired[randomColor]};"><span class="client_color_DB">${Client_colorRequired[randomColor]}</span></span></p>`
}

function go(){
  const interval = setInterval(randomlyGenerate, 55)
  setTimeout(()=>{clearInterval(interval)}, 404)
}

go()