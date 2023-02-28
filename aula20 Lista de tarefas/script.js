let contador = 0;
let input = document.getElementById("inputtarefa");
let btnadd = document.getElementById("btn-add");
let main = document.getElementById("arealista");

function addtarefa() {
    //pegar valor digitado no input
    let valorinput = input.value;

    //se nao for vazio nem nulo nem definido
    if ((valorinput !=="") && (valorinput !==null) && (valorinput !== undefined) ) {

            ++contador;

        let novoitem = `<div id="${contador}"class="item">
        <div onclick="marcartarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            
        </div>
        <div onclick="marcartarefa(${contador})" class="item-nome">
            ${valorinput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})"class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

        //adicionar nome
        main.innerHTML += novoitem;

        //zerar campinho
        input.value = "";
        input.focus();
    } else {
        window.alert("Ensira uma valor valido");
    }
}

/*input.addEventListener("keyup", function(event)){
    //se clicou ENTER = (13)
    if (event.keycode === 13){
        event.preventDefault();
        btnadd.click();
    }
}*/

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcartarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "item") {

        item.classList.add("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-checkbox-marked-circle");

        item.parentNode.appendChild(item);

    } else {

        item.classList.remove("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-checkbox-marked-circle");
        icone.classList.add("mdi-circle-outline");
    }

}