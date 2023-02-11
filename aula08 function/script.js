/*
--- Function

--- function: e um bloco de codigos onde so executado quando ocorre uma chamada para ele entrar em ação

*/

// função de soma
function soma(valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,10);

//var total = soma(10,20)

//função de cotação do dolar
function realparadolar(real , cotacaodolar){
    return real * cotacaodolar;
}

var valorreal = 7.89;
var cotacao = 5.08;

var total = realparadolar(valorreal, cotacao)
alert("O valor em Real é R$: "+valorreal+"o valor em dólar U$ é: "+total);

//---
function alertahello() {
    alert("Olá pessoal!!!");
}

alertahello();

//temperatura
function paracelcius(valorfahrenheit) {
    return (5/9) * (valorfahrenheit - 32);
}

var x = paracelcius(77);

alert("A temperatura é de "+ x +"graus celsius");

function minhafuncao() {
    // var dentro so funciona como local

    var x = 2;
    
    // la fora ela nao funciona a nao ser se ela ja for declarada la fora
}