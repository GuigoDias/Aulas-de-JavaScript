var nome = document.getElementById("nome");
var N1 = document.getElementById("bimestre1");
var N2 = document.getElementById("bimestre2");
var N3 = document.getElementById("bimestre3");
var N4 = document.getElementById("bimestre4");
var resp
var calcMedia = document.getElementById("resposta");
var validacao = document.getElementById("valida");

function Calcular(){
    resp = (parseInt(N1.value) + parseInt(N2.value) + parseInt(N3.value) + parseInt(N4.value))/4;
    calcMedia = resp;
    if(resp >= 7){
        validacao.innerHTML = ("Parabéns, " + nome.value + ", sua média de notas foi " + calcMedia + " e voce foi aprovado!");
    }
    else{
        validacao.innerHTML = ("Que pena, " + nome.value + ", sua média de notas foi " + calcMedia + " e infelizmente você não foi aprovado.");
    }
}