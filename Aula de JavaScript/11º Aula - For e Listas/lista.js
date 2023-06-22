function MinhaFuncao(){
//criar um elemento li
let li = document.createElement("li");
let add= document.getElementById("add");
//criar um texto
let texto = document.createTextNode(add.value);
//adicionar um texto no elemento
li.appendChild(texto);
//adicionar o li na MinhaLista
document.getElementById("MinhaLista").appendChild(li)
}