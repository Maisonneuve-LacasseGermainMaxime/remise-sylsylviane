// Variables et sélections HTML
const modale = document.querySelector(".modale-conteneur");
const bouton = document.querySelector(".fermer-modale");
const lien = document.querySelector(".retour");

//TODO: DÉFI SUPPLÉMENTAIRE: FAIRE AVEC UNE CLASSE
//Fonctions
export function init(){
    bouton.addEventListener("click", cacherModale);
    lien.addEventListener("click", cacherModale);
}
 
function setTitre(nouveauTitre){
    // TODO: à faire 
}

export function afficherModale(){   
    modale.classList.remove("invisible"); 

}


export function cacherModale(){
    modale.classList.add("invisible");
}

//Exécution
// init();

