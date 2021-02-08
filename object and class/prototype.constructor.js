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
       