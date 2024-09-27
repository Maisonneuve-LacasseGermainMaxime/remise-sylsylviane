class Carrousel {
  constructor(conteneurHTML, tableauImages) {
    //ConteneurHTML
    this.conteneurHTML = conteneurHTML;
    this.imageConteneur =
      this.conteneurHTML.querySelector(".image-principale");
    this.boutonAvancer = this.conteneurHTML.querySelector(".boutonAvancer");

    //Liste d'images à afficher
    this.tableauImages = tableauImages;

    this.position = 0;

    setInterval(this.avancer.bind(this), 5000);

    this.boutonAvancer = this.conteneurHTML.querySelector(".boutonAvancer");
    this.boutonReculer = this.conteneurHTML.querySelector(".boutonReculer");

    this.boutonAvancer.addEventListener("click", this.avancer.bind(this));
    this.boutonReculer.addEventListener("click", this.reculer.bind(this));
  } 

  /**
   * Fonction pour afficher les images du carrousel
   */
  afficherImage(source) {
    this.imageConteneur.classList.remove("fade-in");
    setTimeout(
      function() {      
        this.imageConteneur.src = source;
        this.imageConteneur.classList.add('fade-in');
    }.bind(this), 500); 
  }
  

  /**
   * Fonction pour avancer dans le carrousel
   */
  avancer() {
    this.position++;
    if (this.position >= this.tableauImages.length) {
      this.position = 0;
    }

    let image = this.tableauImages[this.position];
    this.afficherImage(image);
  }
  /**
   * Fonction pour reculer dans le carrousel
   */
  reculer() {
    this.position--;
    if (this.position < 0) {
      this.position = this.tableauImages.length - 1;
    }
    let image = this.tableauImages[this.position];
    this.afficherImage(image);
  }
}

export default Carrousel;
