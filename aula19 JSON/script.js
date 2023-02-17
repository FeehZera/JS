/*
JSON
  
JSON significa JavaScript Object Notation que traduzido pro português fica algo como notação de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda liguagem de programação.

Para trabalhar com JSON no Javascript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos 

JSON.stringify() -> Converte objetos em texto padrão JSON

*/

//OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
    motor: ["1.6", "1.4", "1.0"]
};

// O OBJETO EM JAVASCRIPT É ALGO ABSTRATO!!!

// PARA CONVERTER OBJETO ABSTRATO PODE SE USAR O JSON...
let texto = JSON.stringify(carro);

document.getElementById("area").innerHTML = carro;
//COMO O OBJETO JÁ FOI CONVERTIDO O CONSOLE NÃO O RECONHECE ,POIS O CONSOLE SÓ ACEITA ALGO OBJETO
console.log(texto.modelo);


//CONVERTENDO DE VOLTA PARA ABSTRATO
let obj = JSON.parse(texto);

console.log(obj.modelo);
console.log(obj.motor[1]);

// PONTA PÉ EM JQuery!!!
/*
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/85802000/json/');
ajax.send();

ajax.onload = function () {
    document.getElementById("area").innerHTML = this.responseText;
    let.obj = JSON.parse(this.responseText);
    alert(obj.ddd);
};
*/
// USANDO JQuery DE FORMA CHIQUE COM O BUSCAR CEP

function buscarcep() {
    let cep = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.getElementById("result").innerHTML = this.responseText

        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById("result").innerHTML = `Logradouro: ${logradouro} <br> cidade: ${cidade} <br> Estado: ${estado}`

    }
}