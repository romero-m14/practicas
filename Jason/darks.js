/* let user = "Jorge"
alert("Hola " + user)
alert("este es otro mensaje")
alert(true)

alert('Hola ${user}')
alert(`
    asd
    asd
    asd
    `)   */

 /* let age = Number(prompt("Hola ¿Cuál es tu edad?"))

/* alert(`Tu edad en 10 años es ${10 + (age)}`)  */

/* if(age >= 18) {
    alert("Eres mayor de edad")
    alert("eres cool 😎")
} else {
    alert("Eres menor de edad")
    alert("no eres cool 😢")
}

if (age > 0) { 
    alert("es positivo") 
} else 
    { alert("es negativo")
}  */

let nota = Number(prompt("¿Cuál es tu nota?"))

if (nota >= 75) {
    alert("Aprobado")
} else if (nota >= 50 && nota < 75) {
    alert("Reprobado")
} else if(nota < 50){
    alert("a estudiar mas")
} else {
    alert("")
}
