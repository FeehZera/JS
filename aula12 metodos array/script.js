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
pessoa.puss("Qualquer coisa");

// para remover o primeiro item da matriz
pessoa.shift(); // todos os itens mudam sua casa/valor ou seja item 1 passa a ser 0 , o 2 passa a ser 1 assim sucesivamente, ou seja todos itens andam uma casa para traz

// colocar um item por primeiro na matriz
pessoa.unshift("Bonitao") // assim como shift so que ao contrario ele umpurra para frente ou seja 0 passa aser 1, 1 vai para 2 assim sucesivamente

// metodo delete, remove o conteudo da casa seleciona mas nao a apaga ou seja deixa ela indefinida / undefined
delete pessoa[0]; // nao e o melhor metodo de apagar um valor pois ele deixa a matriz com um burraco

// metodo para adicionar multiplos valores dentro de uma casa do array
pessoa.splice(1,0,"item adiciona 1", "item adiciona 2"); // 