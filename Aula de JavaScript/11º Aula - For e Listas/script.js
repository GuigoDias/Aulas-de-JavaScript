let x = document.getElementById("inicio");
let y = document.getElementById("final");

function contar(){

    while(parseInt(x.value) <= parseInt(y.value))
    {
        //criar um elemento p
        let paragrafo = document.createElement("p")
        let texto = document.createTextNode(x.value)
        
        //adicionar um texto no elemento
        paragrafo.appendChild(texto);
        
        //adicionar o elemento no section
        document.getElementById("contar").appendChild(paragrafo)
        console.log(x)
        x.value++ // (x = x + 1)
    }
}