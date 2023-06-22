let base = document.getElementById("base");
let altura = document.getElementById("altura");
let resp = 0
let respFinal = document.getElementById("respFinal");

function calcular(){
    resp = (parseInt(base.value) * parseInt(altura.value)) /2;
    respFinal.innerHTML = ("A Área do triângulo é de " + resp + " cm")
}