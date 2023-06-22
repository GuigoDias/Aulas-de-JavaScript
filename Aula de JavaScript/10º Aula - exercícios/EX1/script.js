var dia = document.getElementById("dia");
var resposta = document.getElementById("resposta");

function Informar(){
    switch(dia.value)
    {
        case "2":
            resposta.innerHTML = "dia útil"
            break;
        case "3":
            resposta.innerHTML = "dia útil"
            break;
        case "4":
            resposta.innerHTML = "dia útil"
            break;
        case "5":
            resposta.innerHTML = "dia útil"
            break;
        case "6":
            resposta.innerHTML = "dia útil"
            break;
        case "1":
            resposta.innerHTML = "final de semana"
            break;
        case "7":
            resposta.innerHTML = "final de semana"
            break;
        default:
            resposta.innerHTML = "inválido"
            break;
    }

}