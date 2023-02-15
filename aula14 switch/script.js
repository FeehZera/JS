/*
--- Switch

É usado para realizar diferentes ações com base em diferentes condições não seja compativel não será  executada e o valor padrão será adicionado

*/

/* -------------
switch (expressao) {
    case a:
        //O QUE ACONTECE
        break;
    case b:
        //O QUE ACONTECE
         break;
    case c:
        //O QUE ACONTECE
         break;
    default:
        //O QUE ACONTECE
};

function verificacor() {
    let cor = document.getElementById("cor").value;

//COMO TRANSFORMAR TODAS AS STRINGS EM LETRAS MINUSCULAS
    cor = cor.toLowerCase(); // USE O toLowerCase()

    switch (cor) {
        case "azul":
            //O QUE ACONTECE
            document.body.style.backgroundColor = "blue"
            break;
        case "vermelho":
            //O QUE ACONTECE
            document.body.style.backgroundColor = "red"
             break;
        case "amarelo":
            //O QUE ACONTECE
            document.body.style.backgroundColor = "yellow"
             break;
        default:
            //O QUE ACONTECE
            document.getElementById("teste").innerHTML = `Nenhuma cor disponivel para: ${cor}`
    };
}

function verificacor() {
    let cor = document.getElementById("cor").value;

    let x = 0

    switch (x) {
        case 0:
            //O QUE ACONTECE
            document.getElementById("teste").innerHTML = "A variavel é zero";
            break;
        case "vermelho":
            //O QUE ACONTECE
            document.body.style.backgroundColor = "red"
             break;
        case "amarelo":
            //O QUE ACONTECE
            document.body.style.backgroundColor = "yellow"
             break;
        default:
            //O QUE ACONTECE
            document.getElementById("teste").innerHTML = "Não foi encontrado"
    };
}
*/

function diadasemana() {
    var dia = new Date().getDay();
    console.log(dia);

switch (dia) {
    case 0:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "domingo"
        break;
    case 1:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "segunda"
        break;
    case 2:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "terça"
        break;
    case 3:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "quarta"
        break;    
    case 4:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "quinta"
    break;
        case 5:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "sexta"
        break;
    case 6:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "sábado"        
        break;

    default:
        //O QUE ACONTECE
        document.getElementById("teste").innerHTML = "nao sei que dia é..."
};
}