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