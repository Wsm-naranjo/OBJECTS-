
function Taxi (tipoMotor, numeroPasajeros, carga, velocidad) {

    this.tipoMotor = tipoMotor; this.numeroPasajeros = numeroPasajeros;
    
    this.carga = carga; this.velocidad = velocidad;
    
    }
    
     
    
    Taxi.prototype = { ruedas: 4, saludar: function() {
    
    alert('Hola soy un taxi de ' + this.ruedas + ' ruedas y ' +this.numeroPasajeros +' pasajeros');} }
    
     
    
    function ejemploObjetos() {
    
    var taxi1 = new Taxi(1, 6, 300, 90);
    
    taxi1.saludar();
    
    }