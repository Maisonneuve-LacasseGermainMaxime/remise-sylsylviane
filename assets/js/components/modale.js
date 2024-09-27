// Variables et sélections HTML
const modale = document.querySelector(".modale-conteneur");
const bouton = document.querySelector(".fermer-modale");
const lien = document.querySelector(".retour");

//Fonctions

/**
 * Fonction au chargement de la page
 */
export function init() {
  bouton.addEventListener("click", cacherModale);
  lien.addEventListener("click", cacherModale);
}

/**
 * Fonction pour afficher la boite modale
 */
export function afficherModale() {
  modale.classList.remove("invisible");
}

/**
 * Fonction pour cacher la boite modale
 */
export function cacherModale() {
  modale.classList.add("invisible");
}

//Exécution
// init();
