function adicionarCampoEndereco(){
    var elemento = document.createElement("input");
    //elemento.setAttribute("type", "text");
    // elemento.setAttribute("class", "endereco");
    var no = document.getElementById("botao");
    document.getElementById("formulario").insertBefore(elemento,no);

}