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
        
        
        
        
        