class Carrousel{
    constructor(conteneurHTML, tableauImages){

        //ConteneurHTML
        this.conteneurHTML = conteneurHTML;
        this.imgageConteneur = this.conteneurHTML.querySelector(".image-principale");

        //Liste d'images à afficher
        this.tableauImages = tableauImages;
        //Position à laquelle je suis rendue dans mon tableau
        this.position = 0;
        let imageAuDepart = this.tableauImages[this.position];
        this.afficherImage(imageAuDepart);
        //fonction setInterval appartient à window. Ne pas oublier .bind pour aller chercher le contexte de this dans class Carrousel
        setInterval(this.avancer.bind(this), 3000);
    }

    afficherImage(source){
        this.imgageConteneur.src = source;
    }

    avancer(){
        this.position++;
        if(this.position >= this.tableauImages.length){
            this.position = 0;
        }

        let image = this.tableauImages[this.position];
        this.afficherImage(image);
    }

    reculer(){
        // si + petit que 0 , je veux retourner à la longueur du tableau -1 9video sur les classes environ 2hr: 03min
    }
}

export default Carrousel;