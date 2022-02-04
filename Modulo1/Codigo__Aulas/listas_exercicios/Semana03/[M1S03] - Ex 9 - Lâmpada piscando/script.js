var estado = false;
var elemento = document.createElement("img");
document.getElementById("container").appendChild(elemento);
imagemAtual(estado);

setTimeout(ligaDesliga, 2000);

function ligaDesliga(){
    estado = !estado;
    imagemAtual(estado);
    setTimeout(ligaDesliga, 2000);
}

function imagemAtual(estado){

    if (estado == true){
       elemento.setAttribute("src","imagens/luz-acesa.png");
    }
    if (estado == false){
       elemento.setAttribute("src","imagens/luz-apagada.png");
    }

}