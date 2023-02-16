/* 
    EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

    setTimeout(function, tempo em milisegundos)
    -> Executa uma função, depois de esperar um número especificado de milissegundos.

    setInterval(function, milliseconds) 
    -> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/

/*-----------------
var tempo = Number("")
function start() {
    document.getElementById("tempo").innerHTML = "Começou a contar"
     
    //ATIVA A FUNCAO APENAS UMA VEZ QUANDO O TEMPO FOR ESPECIFICADO
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setingTimeOut";
        document.body.style.backgroundColor = "red";
    }, 5000);
};

function stop() {
    //para parar a contagem de um settimeout se usa o cleartimeout
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem";
}
*/

function start() {
    tempo = setInterval (function() {
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseInt(cronometro) - 1;

    if (soma === 0) {
        document.getElementById("tempo").innerHTML = "Tempo esgotado";
        stop()
    } else {
        document.getElementById("tempo").innerHTML = soma;
    }
    
}, 1000);
}

function stop() {
    clearInterval(tempo);
}
