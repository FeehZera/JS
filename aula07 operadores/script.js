/*

-------------- OPERADORES

-- SAO: + - * / = ++ -- += -= && || == === != !==  etc...

1) operadores aritmeticos
2) operadores de atribuicao
3) operadores de sequencia
4) operadores de comparacao
5) operadores condicional (ternarios)
6) operadores logicos

 */

//Matematicos
var valor1, valor2, total;
valor1=5;
valor2=2;
total = valor1 + valor2;
alert(total); 

//Encremento
var valor1, valor2, total;
valor1=5;
valor2=2;
total = ++valor1;
alert(total); 
alert('O valor1 ficou: ' + valor1 )

//Atribuicao
var valor1, valor2, total;
valor1=5;
valor2=2;

valor1 += valor2; 
valor1 = valor1 + valor2;

//Concatenacao
var valor1, valor2, total;
valor1="Dimitri ";
valor2=2;"Teixeira"
total = valor1 + valor2;
alert(total); 

//Comparacao
var valor1, valor2, total;
valor1=8;
valor2=10;
total = (valor1 == valor2) // true (verdadeiro) false (falso)
alert(total); 
// tipo ===
valor1=8;
valor2="8";
total = (valor1 === valor2) // true (verdadeiro) false (falso)
alert(total); 

//Ternario

var idade, eleitor;
idade=65;
eleitor= (idade < 18) ? "Não, Eleitor" : "Sim, Eleitor"

alert('A resposta é: ' + eleitor + 'a idade dele é de : ' + idade);

resultado = (idade > 65 && idade < 70);

alert(resultado)

//
var idade, eleitor;
idade=65;
eleitor= (idade < 18) ? "Não, Eleitor" : "Sim, Eleitor"

alert('A resposta é: ' + eleitor + 'a idade dele é de : ' + idade);

resultado = (idade === 60 || idade === 70);

alert(resultado)

//
var idade, eleitor;
idade=65;
eleitor= (idade < 18) ? "Não, Eleitor" : "Sim, Eleitor"

alert('A resposta é: ' + eleitor + 'a idade dele é de : ' + idade);

resultado = !(idade === 65); //true //false

alert(resultado)

