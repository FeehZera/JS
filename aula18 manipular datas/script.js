/*
MANIPULAR DATAS
*/

//comando base para pegar data
let data = new Date();
console.log(data);

//pegar ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

//pegar o mês atual -- de 0 janeiro ate 11 dezembro
let mes = data.getMonth();
console.log(mes);

//mes de forma escrita
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let mesescrito = meses[data.getMonth()];
console.log(mesescrito);

//dia do mes de 1 ate 31
let dia = data.getDate();
console.log(dia);

//dia da semana -- 0 domingo ate 6 sabado
let semana = data.getDay();
console.log(semana);

//dia semana forma escrita
const semanas = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

let semanaescrita = semanas[data.getDay()];
console.log(semanaescrita);

//pegar a hora
let hora = data.getHours();
console.log(hora);

//pegar os minutos - 0 a 59
let minutos = data.getMinutes();
console.log(minutos);

//pegar os segundos - 0 a 59
let segundos = data.getSeconds();
console.log(minutos);

//pegar os milesegundos - 0 ate 999
let milesegundos = data.getMilliseconds();
console.log(milesegundos);

//pegar a data no padrao brasileiro - dia/mes/ano
let databr = data.toLocaleString('pt-br',{ dateStyle: 'short'});
console.log(databr);

//pegar os valores separados / MODO HARD
d = new Date();
diames = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addzero(x) { return x < 10 ? '0' + x : '' + x; };

let datapadraobr = addzero(diames) + "/" + addzero(mes) + "/" + ano;
console.log(datapadraobr)

//compara datas - maior ou menor ex: vencimentos
var hoje = new Date();
var vencimento = new Date(2023, 1, 15)

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Sua conta ainda não venceu!")
}

//diferença entre duas data em dias
var datainicial = new Date();
var datafinal = new Date(2023,3,20);

var diferenca = datafinal.getTime() - datainicial.getTime();

var diferencadias = Math.ceil(diferenca / (24 * 60 * 60 * 1000));

console.log(diferencadias + " dias");