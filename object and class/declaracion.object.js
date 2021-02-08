//---------------------------------------------------------------------------------------------------------
   //declaracion de objetos por notacion literaria 
   var auto ={
    modelo:'toyota',
    placa:'ghj456',
            //composicion 
    llanta:{
        rin:'17',
        marca:'goodyear'
    },
    radio:{
        estado:'radio apagado',
        marca:'sony'
    },
    motor:{
        motorPrendido= false
    },
         //declaracion de metodos
    prender:function(){
        this.motorPrendido= true;
        this.radio.estado="radio prendido";
        console.log("auto prendido");
    },
    // otra forma de declarar un metodo es eliminando la palabra function 
    apagar(){
        this.motorPrendido= false;
        this.radio.estado="radio apagado";
        console.log("auto apagado");
    }
};