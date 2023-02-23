/*

ARRAYS

Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

-------------------- 

var item1 = "arroz";
var item2 = "feijao";
var item3 = "macarao";
var item4 = "leite";
                 //0       //1        //2       //3
const lista = ["arroz", "feijao", "macarao", "leite"];

alert(lista[0]) //0 = arroz

//outra forma de ocupar as listas

const vazia = [];
vazia[0] = "arroz";
vazia[1] = "feijao";
vazia[2] = "macarrao";
vazia[3] = "leite";

alert(vazia[1]) //1 = feijao

//metodo nerd de criar array, atraves de texto

const nerd = new Array("arroz", "feijao", "macarao", "leite");

alert(nerd[2]) //2 = macarrao

-------------- */

//testes

const lista = ["arroz", "feijao", "macarao", "leite"];

let x = lista[3]
alert(x)

// para mudar um iten dentro de um array, ex: arroz por café

lista[0] = "café";
alert(lista[0]);

//para mostrar lista completa

console.log(lista);

// ---ARRAY PODEM CONTER: STRINGS, NUMBER, FUNCTIONS E ATÉ OUTROS ARRAYS DENTRO DE SI MESMO

// DIFENÇA DE ARRAY PARA UM OBJETO

const pessoa = ["Dimitri", "Teixeira", 30]; // array
const pessoa2 = {nome:"Dimitri", sobrenome:"Teixeira", idade:30}; //objeto

// como passar valores com array
console.log(pessoa[0]); // pessoa[0]

// como passar valores com objeto
console.log(pessoa2.nome); // pessoa2.nome

// MACETES DOS ARRAYS / MATRIZES

// mostrar quantos itens tem dentro do array
alert(pessoa.length); //3

// mostrar o ultimo item do array
alert(pessoa[pessoa.length -1]);

// como adicionar um item dentro da matriz-------------------

//push
pessoa.push("Brasileiro"); // acresenta ao final

//pela posicao
pessoa[pessoa.length] = "Casado"; // acresenta ao final

console.log(pessoa)

// CUIDADO AO COLOCAR O VALOR AO INDICE INCORETO EX:
pessoa[8] = "Casado";

//se pedir para mostra um iten vazio tipo a casa 6 parece indefinido / undefine

alert(pessoa[6]); // a matriz fica com um buraco

// como saber se uma variavel é uma matriz

alert(Array.isArray(pessoa)); // Array.isArray(pessoa)

const a = "Dimitri";

alert(Array.isArray(a)); // false 

// o retorno é sempre True ou False



