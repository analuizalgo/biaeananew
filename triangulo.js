const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("#outResp1")

//ouvinte
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    const ladoC = Number(form.inLadoC.value)

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
        alert("Essas medidas não podem formar um triangulo. Um dos lado não pode ser maior que a soma dos outros dois.")
     form.inLadoA.focus()
     form.inLadoB.focus()
     form.inLadoC.focus()
     return
    }

    resp.innerText = 
    
})