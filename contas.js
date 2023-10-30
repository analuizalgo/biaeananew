const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0
let valTotal = 0
let resposta = ""

frm.addEventListener ("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescrição.value
    const valor = Number()
})
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