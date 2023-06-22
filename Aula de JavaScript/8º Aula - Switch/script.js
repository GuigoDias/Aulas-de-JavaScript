let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")

function Apertar() {
    switch(numero.value)
    {
        case "1":
            resposta.innerHTML = "Voce escolheu Maçã";
            break;
        case "2":
            resposta.innerHTML = "Voce escolheu Pera";
            break;
        default:
            resposta.innerHTML = "Não tem essa parada"
            break
    }
}