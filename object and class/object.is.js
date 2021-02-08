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
        
        
        
        
        