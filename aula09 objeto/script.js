/*
--- objetos {}

-- this : puxa a variavel dentro do {}


*/

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function() {alert('Biiiiiiiiiiiiii')},
    completo: function() {
        return "A marca é "+this.marca+" e o modelo é: " + this.modelo
    }
};

carro.buzina()

console.log(carro.placa);
console.log(carro["marca"]);
console.log(carro.completo());