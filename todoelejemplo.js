//---------------------------------------------------------------------------------------------------------
   //declaracion de objetos por notacion literaria 
var auto ={
    modelo:'toyota',
    placa:'ghj456',
            //composicion 
    llanta:{
        rin:'17',
        marca:'goodyear'
    },
    radio:{
        estado:'radio apagado',
        marca:'sony'
    },
    motor:{
        motorPrendido= false
    },
         //declaracion de metodos
    prender:function(){
        this.motorPrendido= true;
        this.radio.estado="radio prendido";
        console.log("auto prendido");
    },
    // otra forma de declarar un metodo es eliminando la palabra function 
    apagar(){
        this.motorPrendido= false;
        this.radio.estado="radio apagado";
        console.log("auto apagado");
    }
};






//----------------------------------------------------------------------------------------------------
        //object.is() ejemplos
Object.is('hola', 'hola');     // true
Object.is(puerta, puerta);   // true

Object.is('gro', 'bar');     // false
Object.is([], []);           // false

var prueba = { a: 1 };
Object.is(prueba, prueba);       // true

Object.is(null, null);       // true

// casos especiales y diferencias el ===
Object.is(+0, -0);           // false 
+0 === -0;                   // true
Object.is(-0, -0);           // true y en este no varia
Object.is(NaN, 0/0);         // true
NaN === NaN;                 // false





//----------------------------------------------------------------------------------------------------
        // Object.keys()
    
var test = ['a', 'b', 'c' , 'd'];
console.log(Object.keys(arr)); // consola: ['0', '1', '2', '3']

//arreglo como objeto ordenados
var test2 = { 0: 'a', 1: 'b', 2: 'c' , 3: 'cd' };
console.log(Object.keys(obj)); // consola: ['0', '1', '2', '3']

//arreglo como objeto con nombres ordenados aleatoriamente
var test3 = { 300: 'a', 1: 'b', 7: 'c' };
console.log(Object.keys(test3)); // console: ['1', '7', '300']



//---------------------------------------------------------------------------------------------------------
        //Object.assign()
var objeto1 = { a: 1, b: 2 };
var objeto2 = { b: 4, c: 5 };

var returnedTarget = Object.assign(objeto1, objeto2);

console.log(target);
//Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
//Object { a: 1, b: 4, c: 5 }
/*el assign como en el ejemplo asigna las propiedades de enumerables de uno o mas obejtos
y como se observa igual en el objeto 2 como una propiedad se repite le muta */




//------------------------------------------------------------------------------------------------------
        //object.values()
 var perro = {
  nombre: 'lulu',
  edad: '42 meses',
};
console.log(Object.values(object1));
/*nos muestra por consola este aray en el cual nos muestro solo el valor de las propiedades del objeto
 Array ['lulu', '42 meses']*/






//-----------------------------------------------------------------------------------------------------     
        //Object.create()
//crea un objeto nuevo, utilizando un objeto existente como en el siguiente objeto        
var persona = {
    esHumano: false,
    printIntroduction: function() {
      console.log(`Mi nombre es ${this.nombre}. ¿Soy humano? ${this.esHumano}`);
    }
  };
  
var yo = Object.create(persona);
  
yo.nombre = 'Sebas'; // "nombre" es una propiedad establecida en "yo", pero no en "persona"
yo.esHumano = true; // las propiedades heredadas en este caso es humano se pueden sobrescribir o modificar
  
yo.printIntroduction();// ejecutando este metodo "Mi nombre es Sebas. ¿Soy humano? true"}







//----------------------------------------------------------------------------------------------------
        //Object.freeze()
/*congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar 
las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración,
o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve
el objeto recibido*/

var objModificar = {
    propiedad: 42
  };
  
  Object.freeze(objModificar);
  
  objModificar.propiedad = 33;  

  console.log(objModificar.propiedad);
  // nos imprime por consola el 42 







//-------------------------------------------------------------------------------------------------------
      //split()
/* Sirve para dividir o cortar una cadena de texto en sub-cadenas y luego retornar un arreglo(array) de estas */

var cadena = "cadena de texto",
    separador = " ", // un espacio en blanco
    limite    = 2, // limite
    arregloDeSubCadenas = cadena.split(separador, limite);

console.log(arregloDeSubCadenas); // la consola devolverá: ["cadena", "de"]

var cadena = "cadena de texto",
    separador = " ", // un espacio en blanco
    arregloDeSubCadenas = cadena.split(separador);

console.log(arregloDeSubCadenas); // la consola devolverá: ["cadena", "de", "texto"]

var cadena = "cadena de texto",
    arregloDeSubCadenas = cadena.split();

console.log(arregloDeSubCadenas); // la consola devolverá: ["cadena de texto"]

var cadena = "cadena de texto",
    separador = "",
    arregloDeSubCadenas = cadena.split(separador);

console.log(arregloDeSubCadenas);
// la consola devolverá: ["c", "a", "d", "e", "n", "a", " ", "d", "e", " ", "t", "e", "x", "t", "o"]







//-------------------------------------------------------------------------------------------------------
    //delete()
//permite borrar propiedades de un objeto 
var mySet = new Set();
mySet.add("hola");

mySet.delete("hello"); // Retorna false. No hay elemento "hello" para ser removido.
mySet.delete("hola"); // Retorna true.  Removido exitosamente.

mySet.has("hola");    // Retorna false. El elemento "hola" ya no está presente.






//-------------------------------------------------------------------------------------------------------
    //prototype.constructor
Profesor.prototype.constructor = Profesor;

Profesor.prototype.saludo = function() {
    var prefijo;
  
    if (this.genero === 'masculino' || this.genero === 'Masculino' || this.genero === 'm' || this.genero === 'M') {
      prefijo = 'Sr.';
    } else if (this.genero === 'female' || this.genero === 'Femenino' || this.genero === 'f' || this.genero === 'F') {
      prefijo = 'Sra.';
    } else {
      prefijo = 'Sx.';
    }
  
    alert('Hola. Mi nombre es ' + prefijo + ' ' + this.nombre.apellido + ', y enseño ' + this.materia + '.');
  };


   //__proto__
   var shape = {};
   var circle = new Circle();
   
   // Establecer el objeto prototype.
   // OBSOLETO. Esto es solo un ejemplo. NO HACER ESTO en código real.
   shape.__proto__ = circle;
   
   // Obtener el objeto prototype
   console.log(shape.__proto__ === circle); // true
   



//-------------------------------------------------------------------------------------------------------
      //Object.defineProperties()
//define nuevas o modifica propiedades existentes directamente en el objeto, retornando el objeto.

//Estructura
Object.defineProperties(obj, propiedades);

/*
obj
El objeto sobre el cual se crearán o modificaran sus propiedades.
propiedades
Un objeto cuyas propiedades enumerables propias consituyen descriptores para las propiedades a ser definidas o modificadas.
*/

Object.defineProperties(objetos, {
  "property1": {
    value: true,
    writable: true
  },
  "property2": {
    value: "Hello",
    writable: false
  }
  // etc
});




//-------------------------------------------------------------------------------------------------------
      //Object.defineProperty() 
//define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.

Object.defineProperty(objeto, propiedad, descriptor);
/*
obj
El objeto sobre el cual se define la propiedad.
prop
El nombre de la propiedad a ser definida o modificada.
descriptor
El descriptor de la propiedad que está siendo definida o modificada.
*/

// Definiendo todo explicitamente
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});


//Modificando una propiedad
    // writable
var o = {}; // Crea un objeto nuevo

Object.defineProperty(o, 'a', {
  value: 37,// asignado un valor de 37
  writable: false // no permite sobreescribir o modificar las propiedades
});

console.log(o.a); // console 37
o.a = 25; // Ningún error arrojado (lo tiraría en modo estricto, aún si el valor fuera el mismo)
console.log(o.a); // muestra por console 37. La asignación no funcionó



    // enumerable
var o = {};
Object.defineProperty(o, 'a', { value: 1, enumerable: true });
Object.defineProperty(o, 'b', { value: 2, enumerable: false });
Object.defineProperty(o, 'c', { value: 3 }); // enumerable por defaults es false
o.d = 4; // enumerable por defaults es true al crear una propiedad configurandola

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false



      //configurable
var o = {};
Object.defineProperty(o, 'a', {
  get: function() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', { configurable: true }); // arroja TypeError
Object.defineProperty(o, 'a', { enumerable: true }); //  arroja  TypeError
Object.defineProperty(o, 'a', { set: function() {} }); //  arroja  TypeError (set estaba definido como undefined)
Object.defineProperty(o, 'a', { get: function() { return 1; } }); // arroja TypeError (incluso aunque los get hacen lo mismo)
Object.defineProperty(o, 'a', { value: 12 }); // arroja TypeError

console.log(o.a); // console 1
delete o.a; // No hace nada
console.log(o.a); // console 1



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

      //class en metodo prototipo
class Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}

var cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100

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
