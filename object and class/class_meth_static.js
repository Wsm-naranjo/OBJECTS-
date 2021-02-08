//class en metodo estatico
class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  var p1 = new Punto(5, 5);
  var p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2)); // 7.0710678118654755
  