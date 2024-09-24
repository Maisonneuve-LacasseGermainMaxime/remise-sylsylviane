class Carrousel {
  constructor(conteneurHTML, tableauImages) {
    //ConteneurHTML
    this.conteneurHTML = conteneurHTML;
    this.imgageConteneur =
      this.conteneurHTML.querySelector(".image-principale");
    this.boutonAvancer = this.conteneurHTML.querySelector(".boutonAvancer");

    //Liste d'images à afficher
    this.tableauImages = tableauImages;

    this.position = 0;
    let imageAuDepart = this.tableauImages[this.position];
    this.afficherImage(imageAuDepart);

    setInterval(this.avancer.bind(this), 3000);

    this.boutonAvancer = this.conteneurHTML.querySelector(".boutonAvancer");
    this.boutonReculer = this.conteneurHTML.querySelector(".boutonReculer");

    this.boutonAvancer.addEventListener("click", this.avancer.bind(this));
    this.boutonReculer.addEventListener("click", this.reculer.bind(this));
  }

  afficherImage(source) {
    this.imgageConteneur.src = source;
  }

  avancer() {
    this.position++;
    if (this.position >= this.tableauImages.length) {
      this.position = 0;
    }

    let image = this.tableauImages[this.position];
    this.afficherImage(image);
  }

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
