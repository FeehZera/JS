/*
JS tem 3 variaveis:

--- var
    ==A CEITA REDECLARACOES

--- let
    == NAO ACEITA REDECLARACOES
    == A VARIAVEL let SE COMPORTA IDEMPEDENTE DENTRO DE UM BLOCO

--- const
    == É UMA VARIAVEL ABSOLUTA NUNCA VAI SOFRER ALTERACOES NEM DENTRO E NEM FORA DOS BLOCOS


*/

var pote = "Bombom";
alert(pote);

//DECLARACAO DE VARIAVEIS
var a,b,c;

//ATRIBUICAO DOS VALORES
a=2;
b=3;
c=a+b;
alert(c);

//FORMA BRUTA
var a=2;
var b=3;
var c=a+b;
alert(c);

var nome, sobrenome, nomeCompleto, idade, soma;

nome = "Dimitri";
sobrenome = "Teixera";
idade = 30;
nomeCompleto = nome + " " + sobrenome;

soma = idade + 10
pessoa = nome + " " + soma;

document.getElementById("texto").innerHTML = nomeCompleto;

document.getElementById("texto").innerHTML = pessoa;

// let

//let pessoa = "Dimitri"
//let pessoa = "João"

var pessoa = "Dimitri"
var pessoa = "João"

alert(pessoa)

// var
var x = 10; // aqui é 10

{

    var x = 2; // aqui é 2

}
// aqui vai ser 10
document.getElementById("texto").innerHTML = x;

// let
let x = 10;

{
    // let dentro do bloco só funciona ali
    let x = 2;

}

document.getElementById("texto").innerHTML = x;

// const 
const x = 10;

{
    // const dentro do bloco nao sofre alteracoes
    const x = 2;

}

document.getElementById("texto").innerHTML = x;