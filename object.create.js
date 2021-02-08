        //Object.create()
//crea un objeto nuevo, utilizando un objeto existente como en el siguiente objeto        
var persona = {
    esHumano: false,
    printIntroduction: function() {
      console.log(`Mi nombre es ${this.nombre}. ¿Soy humano? ${this.esHumano}`);
    }
  };
  
var yo = Object.create(persona);
  
yo.nombre = 'Alejandro'; // "nombre" es una propiedad establecida en "yo", pero no en "persona"
yo.esHumano = true; // las propiedades heredadas en este caso es humano se pueden sobrescribir o modificar
  
yo.printIntroduction();// ejecutando este metodo "Mi nombre es Sebas. ¿Soy humano? true"}
