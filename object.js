var  test  =  [ 'a' ,  'b' ,  'c'  ,  'd' ] ;
consola . log ( Objeto . teclas ( arr ) ) ;  // consola: ['0', '1', '2', '3']

// arreglo como objeto ordenados
var  test2  =  {  0 : 'a' ,  1 : 'b' ,  2 : 'c'  ,  3 : 'cd'  } ;
consola . log ( Objeto . teclas ( obj ) ) ;  // consola: ['0', '1', '2', '3']

// arreglo como objeto con nombres ordenados aleatoriamente
var  test3  =  {  300 : 'a' ,  1 : 'b' ,  7 : 'c'  } ;
consola . log ( Objeto . teclas ( test3 ) ) ;  // consola: ['1', '7', '300']