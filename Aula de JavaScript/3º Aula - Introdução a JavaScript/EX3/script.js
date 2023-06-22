var metro = document.getElementById("metro");
var resultado = document.getElementById("resultado");
var cen = 100;


function CONVERSAO(){
    resultado.innerHTML = parseInt (metro.value) * cen;
}