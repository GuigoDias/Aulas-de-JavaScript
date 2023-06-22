// addEventListener()
/* element.addEventListener(event, function)*/

let botao = document.getElementById("myBtn")

botao.addEventListener('click', MudarAlerta);
function MudarAlerta()
{
    alert("Olá Mundo!")
}