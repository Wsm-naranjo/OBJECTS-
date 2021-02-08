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
        
        