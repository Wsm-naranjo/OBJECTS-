//-------------------------------------------------------------------------------------------------------
      //Class
  //declaracion de una clase
  class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  };
    //expresion de clase
  // Anonima
  let Rectangulo = class {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  };
  
  console.log(Rectangulo.name);
  // output: "Rectangulo"
  
  // Nombrada
  let Rectangulo = class Rectangulo2 {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  };
  console.log(Rectangulo.name);
  // output: "Rectangulo2"