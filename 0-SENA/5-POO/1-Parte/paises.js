var Guitarra = {

    marca: '',
    precio: '', 
    
    init: function (marca, precio) {

        this.marca = marca;
        this.precio = precio;

        return this;
    },
    
    presentar: function() {
        console.log("Guitarra marca: " + this.marca);
    
    }
};

var fender = Object.create(Guitarra);

fender.valor = function() {

    console.log(this.marca + ' vale $30.000 usd');

};

var persona = Object.create(fender).init('Fender');
persona.presentar();
persona.valor();
