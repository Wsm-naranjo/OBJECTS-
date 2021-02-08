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