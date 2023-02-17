/*

CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos. Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no Javascript usam um método chamado constructor() para fabricar os objetos.

*/

// AO INICIIAR / NOMEAR UMA CLASSE SEMPRE USE LETRA MAIUSCULA COMO PADRAO (class Carro) é importante assim como o uso de ponto e virgila ";"
class Carro {
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo+" buzinou: biiiiiiiiiiiiiiii";
    }
}

// IMPORTANTE!!! as class tem que ser construidas primeiro do que suas chamadas diferente das functions que ficam armazenadas na memoria

const uno = new Carro("fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(uno);
console.log(gol.ano); //pode se declarar somente um somente um objeto como por exemplo 
console.log(gol);
console.log(uno.buzina());
console.log(gol.buzina());







const carro = {
    marca: "fiat",
    modelo:"Uno",
    ano: 2001 
};