/*
 FOR laços de repetições

Laços oferecem um jeito facíl de e rápido de executar uma ação repetidas vezes

*/

/*
for (let i=0; i<1001; i++) {
    console.log(i)
    document.getElementById("teste").innerHTML += i + ", "
}
*/
/*
var data = new Date().getFullYear();
console.log(data)
for (let i=1900; i<=data; i++) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}
*/

var data = new Date().getFullYear();
console.log(data)
for (let i=data; i>=1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

const carros = ["gol", "fusca", "brasilia", "chevete"];

var tamanho = carros.length; // PERCORENDO A MATRIZ ATRAVES DO FOR DE FORMA COERENTE OU SEJA CADA ITEN / CASA POR VEZ

for (let i = 0; i<tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}