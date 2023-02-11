/*
--- eventos

-- todos os eventos

onclick -> Disparado quando recebe um click.
ondblclick-> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
Jonmouseup -> Disparado quando o clique do botão é liberado
onfocus -> Disparado quando o elemento recebe o foco. Válido para input, s
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada. 
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/

function eventoclick() {
    alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}

function eventodblclick() {
    alert('Acionou um evento de click');
    document.body.style.backgroundColor = "green";
} 

function viravermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
} 