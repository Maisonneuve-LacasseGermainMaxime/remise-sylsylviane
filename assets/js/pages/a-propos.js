import {init as initNavigation} from "../components/navigation.js";
import {init as initModale, afficherModale, cacherModale} from "../components/modale.js";
import Carrousel from "../classes/Carrousel.js";
import ScrollAnimator from "../classes/ScrollAnimator.js";

function init(){
    initNavigation();
    initModale();

    setTimeout(function () {
        afficherModale();
    }, 5000); 


    //TODO:  Ajouter des boutons pour naviguer manuellement dans le carrousel. Ajouter un effet d'animation lors du changement d'image. Le défilement automatique s'exécute en boucle à l'infini
    let carrouselConteneur = document.querySelector("[data-carrousel]");
    let tableauImages = ["assets/img/carrousel-1.jpg", "assets/img/carrousel-2.jpg", "assets/img/carrousel-3.jpg", "assets/img/carrousel-4.jpg", "assets/img/carrousel-5.jpg", "assets/img/carrousel-6.jpg", "assets/img/carrousel-7.jpg"];
    let carrousel = new Carrousel(carrouselConteneur, tableauImages);

    //TODO: Ajouter un effet d'animation lors de l'affichage au défilement de la page et lors de l'interaction avec plusieurs éléments de la page (survol, clic). Vous devez animer au moins 5 éléments différents par css ET JavaScript.
    let zone = null //si null c'est la page
    let cibles = document.querySelectorAll(".section");
    new ScrollAnimator(zone, cibles); //besoin de la classe sans-opacité pour fonctionner

    //TODO: implémenter un mode sombre/clair pour la page qui sera sauvegardé dans le local storage et dont l'état sera conservé lors du rechargement de la page.

    //TODO: VOIR 5 DERNIERS POINTS DU DOCUMENT OBJECTIFS ET CONSIGNE SUR L'ORGANISATION DES FICHIERS ET PLUS.
} 

init(); 