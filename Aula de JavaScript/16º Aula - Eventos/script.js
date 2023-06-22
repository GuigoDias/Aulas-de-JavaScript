//Eventos
/*No JavaScript, eventos são ações ou ocorrências que acontecem na página web que estamos implementando. Esses eventos geralmente invocam funções que irão executar as operações desejadas. Exemplo de eventos são: o usuário clicar em um botão na página.*/

/*Exemplos de eventos:
-Clicar no mouse;
-Quando a página é carregada
-Quando uma imagem foi carregada
-Quando o mouse passa sobre o elemento
-Quando um formulário HTML é enviado.*/

let nome = document.getElementById("abc")

function mudar()
{
    nome.innerHTML = 'São os alunos de Santo Amaro s2'
}

let dataDeHoje = document.getElementById("demo")
function Data()
{
    dataDeHoje.innerHTML = Date();
}

function carregarAviso()
{
    alert("Você acessou a página")
}

let obj = document.getElementById("obj")
function MudarDeFrase()
{
    obj.innerHTML = "Obrigado!"
}

function VoltarAFrase()
{
    obj.innerHTML = "Passe o mouse aqui!"
}