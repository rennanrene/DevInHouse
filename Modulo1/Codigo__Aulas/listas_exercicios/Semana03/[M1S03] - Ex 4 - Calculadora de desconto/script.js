function calcular(){
    var total = document.getElementById("total").value;
    var desconto = (document.getElementById("desconto").value /100 )* total;
    var totalComDesconto = total - desconto;

    var elemento  = document.createElement("p");
    document.getElementById("dados").appendChild(elemento);
    elemento.innerHTML = "O valor total é: "+total+"\nO desconto é: "+desconto+"\nO total com desconto é: "+totalComDesconto+"";

}