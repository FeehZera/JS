/*

ARRAYS

Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

-------------------- */

var item1 = "arroz";
var item2 = "feijao";
var item3 = "macarao";
var item4 = "leite";

const pessoa = ["Dimitri", "Teixeira", 30, "Professor"]; //array

//document.getElementById("teste").innerHTML = pessoa.join(" - ");

// remover o ultimo item da matriz
pessoa.pop();

// adicionar um item na final da matriz
pessoa.push("Qualquer coisa");

// para remover o primeiro item da matriz
pessoa.shift(); // todos os itens mudam sua casa/valor ou seja item 1 passa a ser 0 , o 2 passa a ser 1 assim sucesivamente, ou seja todos itens andam uma casa para traz

// colocar um item por primeiro na matriz
pessoa.unshift("Bonitao") // assim como shift so que ao contrario ele umpurra para frente ou seja 0 passa aser 1, 1 vai para 2 assim sucesivamente

// metodo delete, remove o conteudo da casa seleciona mas nao a apaga a casa ou seja deixa ela indefinida / undefined
delete pessoa[0]; // nao e o melhor metodo de apagar um valor pois ele deixa a matriz com um burraco

// metodo para adicionar multiplos valores dentro de uma casa do array
pessoa.splice(1,0,"item adiciona 1", "item adiciona 2"); // o primeiro valor "1" indica o local da casa a ser ocupado, o valor dois "0" indica quantos itens vao ser removidos para ele ser realocado, no caso aqui foram removidos "0" valores ou seja nenhum foi removido apenas foram adicionados itens, e o terceiro e os proximos itens sao os valores a ser adicionados

// ele desloca as casas assim como unshift

// metodo concat "FUSAO PARA SE TORNAR SUPER SAIYAJIN" ou somente transformar dois arrays em um kkk

const lista1 = ["arroz", "feijao", "macarao", "leite"]; //array
const lista2 = ["Suco", "refrigerante", "carne"];
const lista3 = ["salgadinho"];

const superlista = lista1.concat(lista2, lista3); //sempre tem que criar uma nova variavel nao pode juntar uma dentro da outro precisa de uma terceira lista para juntar as duas ou mais listas como no exemplo

//document.getElementById("teste").innerHTML = superlista;

//fatiar uma matriz, slice

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Cristiano Ronaldo", "Vampeta", "Dimitri"];
const craques = jogadores.slice(2, 6); //pega apenas a casa selecionada e as posteriores a ela se nao houver um limite pre selecionado, ex: o "2" é o inicio e o "6" é o limite

document.getElementById("teste").innerHTML = craques;

//como deixar valores em ordem alfabetica
const jogoordem = jogadores.sort();

document.getElementById("teste").innerHTML = jogoordem;

//ordem alfabetica ao contrario
jogadores.sort(); //primeiro coloque em ordem alfabetica
jogadores.reverse(); //depois coloque em reverse para ficar ao contrario ou seja inverso

document.getElementById("teste").innerHTML = jogadores;

//como colocar ordem crescente nos numeros 
const numeros = [40, 100, 1, 5, 25, 10];

numeros.sort() // sort serve apenas para strings, em numeros ele coloca em ordem mas so que na primeira casa decimal

numeros.sort(function (a, b) {return a-b}); // hacking para deixar os numejros em ordem numerica crescente

numeros.sort(function (a, b) {return b-a}); // hacking para deixar os numejros em ordem numerica descresente, apenas troque de posicao os parametros "a" e "b"

document.getElementById("teste").innerHTML = numeros;

//pegar o maior numero de uma matriz
function maiornumero (array) {
    return Math.max.apply(null, array);
}

document.getElementById("teste").innerHTML = maiornumero(numeros); //chamando a function

//pegar o menor numero de uma matriz
function menornumero (array) {
    return Math.min.apply(null, array);
}

document.getElementById("teste").innerHTML = menornumero(numeros); //chamando a function

// basta apenas trocar max por min nao function!!!

//filtragem de matrizes
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array) {
    return value > 20;
}

document.getElementById("teste").innerHTML = maior20;

