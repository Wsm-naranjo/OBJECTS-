//class en metodo prototipo
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Método
    calcArea() {
        return this.alto * this.ancho;
    }
}
var cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100