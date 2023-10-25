const form = document.querySelector("form")
const resp = document.querySelector("pre")

//ouvinte
form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(from.inNumero.value)
    let resposta = ""     //variavel do tipo string, para concatenar a resposta
//cria um laço de repetição
    for(let i = 1; i <= 10; i++){
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
    }
    resp.innerText = resposta
    
})