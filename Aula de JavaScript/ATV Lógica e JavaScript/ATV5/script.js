let x = 0
li = 0

function Contar(){
    for (let x = 0; x <= 10; x++) {
        let li = document.createElement("li");
        let texto = document.createTextNode(x);
        li.appendChild(texto);
        document.getElementById("MinhaLista").appendChild(li)
    }
}