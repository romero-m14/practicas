let botoncito = document.querySelector("#btndark")
let documento = document.querySelector("html")

console.log(documento)

function cambiarModo(){
    documento.classList.toggle("dark")
}

botoncito.addEventListener("click",cambiarModo)