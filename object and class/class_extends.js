//SUBclase
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {  // el extends crea una herencia de la class animal 
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}