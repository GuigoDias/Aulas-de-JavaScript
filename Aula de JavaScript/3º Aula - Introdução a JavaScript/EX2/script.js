var dolar = document.getElementById("dolar");
var resultado = document.getElementById("resultado");
var real = 4.91;


function CALCULAR(){
    resultado.innerHTML = parseInt(dolar.value) * real;
}