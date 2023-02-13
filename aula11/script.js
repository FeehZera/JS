var cor = document.getElementById('cor').value;
var body = document.getElementById('body');


function fundo() {
    body.style.backgroundColor = cor
    console.log(cor)
}

function reset() {
    body.style.backgroundColor = ""
    console.log(cor)
    cor = ""
}


