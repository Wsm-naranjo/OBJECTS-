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
