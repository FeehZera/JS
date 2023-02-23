let list = [];

function adicionar() {
    let add = document.getElementById("tarefa").value;
    list.unshift(add);
    console.log(list)
}
function remover() {
    list.shift()
    console.log(list)
}