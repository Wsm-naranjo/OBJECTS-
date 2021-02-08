var mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // Retorna false. No hay elemento "bar" para ser removido.
mySet.delete("foo"); // Retorna true.  Removido exitosamente.

mySet.has("foo");    // Retorna false. El elemento "foo" ya no está presente.

//prototipo constructor
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

  // heredacion de clase
  class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests);
      // subject and grade are specific to Teacher
      this._subject = subject;
      this.grade = grade;
    }
  
    get subject() {
      return this._subject;
    }
  
    set subject(newSubject) {
      this._subject = newSubject;
    }
  }

  //__proto__
  var shape = {};
var circle = new Circle();

// Establecer el objeto prototype.
// OBSOLETO. Esto es solo un ejemplo. NO HACER ESTO en código real.
shape.__proto__ = circle;

// Obtener el objeto prototype
console.log(shape.__proto__ === circle); // true

//
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }