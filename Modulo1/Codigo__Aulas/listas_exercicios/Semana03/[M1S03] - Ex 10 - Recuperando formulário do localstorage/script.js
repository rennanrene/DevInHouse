function adicionarCampoEndereco(){
    var elemento = document.createElement("input");
    elemento.setAttribute("id","endereco");
    var no = document.getElementById("botao");
    document.getElementById("formulario").insertBefore(elemento,no);

}


var storage = localStorage;
var numeroForm = storage.getItem("ident");
if (numeroForm == null){
    storage.setItem("ident", 0);
    numeroForm = storage.getItem("ident");
}

alert(numeroForm+" pessoas foram cadastradas!");

function salvarLS(){
    var numeroForm = storage.getItem("ident");
    var dados = {};
    var listaInputs = document.getElementsByTagName("input");
    for (var i=0; i < listaInputs.length; i++){
        dados[listaInputs[i].getAttribute("id")] = listaInputs[i].value;
    }
    localStorage.setItem(numeroForm, dados);
    numeroForm++;
    storage.setItem("ident", numeroForm);



}