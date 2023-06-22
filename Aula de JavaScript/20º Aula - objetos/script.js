let mostrar = document.getElementById("mostrar");

// let car = "Fiat"
let car = 
{
    nome: "Fiat",
    cor: "Vermelho",
    modelo: "Uno"
}

const aluno =
{
    PrimeiroNome: "Johan",
    SegundoNome: "Carlos",
    Idade: "18",
    Nacionalidae: "Bolivia"
}

mostrar.innerHTML = aluno.PrimeiroNome + aluno.SegundoNome

const pessoa =
{
    PrimeiroNome: "Brunão",
    SegundoNome: "Ruiz",
    id: 335214,
    fullNome: function()
    {
        return this.PrimeiroNome + " " + this.SegundoNome
    }
}

//vetor
let cor = ["Azul", "Vermelho"]

const tarefas =
[
    {
        id: 1,
        texto: "Levar o lixo para fora",
        Completado: true,
    },
    {
        id: 2,
        texto: "Encontrar com o chefe",
        Completado: true,
    },
    {
        id: 3,
        texto: "Consulta no dentista",
        Completado: false,
    }
]

tarefas.forEach(teste)
function teste(tarefas)
{
    console.log(tarefas.texto)
}