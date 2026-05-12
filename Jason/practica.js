/* Calculadora de Promedio y Rendimiento 📱 */
/* let n1 = parseInt(prompt("Nota 1:"));
let n2 = parseInt(prompt("Nota 2:"));
let n3 = parseInt(prompt("Nota 3:"));
let n4 = parseInt(prompt("Nota 4:"));

let promedio = (n1 + n2 + n3 + n4) / 4;

if (promedio >= 90) {
    alert("Promedio: " + promedio + " - Excelente");
} else if (promedio >= 75) {
    alert("Promedio: " + promedio + " - Bueno");
} else if (promedio >= 60) {
    alert("Promedio: " + promedio + " - Regular");
} else {
    alert("Promedio: " + promedio + " - Insuficiente");
} */

/* Calculadora de Tarifa de Transporte 🚕 */    
/* let edad = Number(prompt("¿Tu edad?"));
let Estudiante = prompt("¿Eres estudiante? (si/no)");
let distancia = Number(prompt("¿Cuántos km recorrerás?"));

let precioBase = 10;
let total;

if (edad < 18) {
    total = precioBase * 0.50; 
} else if (Estudiante === "si") {
    total = precioBase * 0.75;
} else if (edad > 60) {
    total = precioBase * 0.40;
} else {
    total = precioBase;
}
if (distancia > 30) {
    total = total + (total * 0.10);
}
alert("Costo final: " + total); */

/* Menú de Conversión de Unidades 📈 */
/* let opcion = Number(prompt("Elija una opción:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\n3. Metros a Kilómetros\n4. Kilómetros a Metros"));
let valor = Number(prompt("Ingresa el valor a convertir:"));

if (opcion === 1) {
    let resultado = (valor * 9/5) + 32;
    alert(valor + "°C son " + resultado + "°F");
} else if (opcion === 2) {
    let resultado = (valor - 32) * 5/9;
    alert(valor + "°F son " + resultado + "°C");
} else if (opcion === 3) {
    let resultado = valor / 1000;
    alert(valor + "m son " + resultado + "km");
} else if (opcion === 4) {
    let resultado = valor * 1000;
    alert(valor + "km son " + resultado + "m");
} else {
    alert("Opción no válida");
} */

/* Sistema de Descuentos en una Tienda 🛒 */
/* let total = Number(prompt("Ingrese el precio total de su compra:"));
let Tarjeta = prompt("¿Tiene tarjeta de cliente frecuente? (si/no)");
let mensaje = "No se aplicaron descuentos ni recargos.";

if (total > 500) {
    total = total - (total * 0.10);
    mensaje = "Se aplicó un 10% de descuento por compra mayor a 500.";
    if (Tarjeta === "si") {
        total = total - (total * 0.05);
        mensaje = "Se aplicó un 10% de descuento + 5% adicional por tarjeta.";
    }
} else if (total <= 100) {
    total = total + (total * 0.05);
    mensaje = "Se aplicó un recargo del 5% por compra menor o igual a 100.";
}
alert(mensaje + "\nEl precio final a pagar es: " + total + " soles."); */

/* Calculadora de Edad y Etapa de Vida 📅 */
/* let nacimiento = parseInt(prompt("¿En qué año naciste?"));
let hoy = parseInt(prompt("¿En qué año estamos hoy?"));
let cumple = prompt("¿Ya pasaste tu cumpleaños este año? (si/no)");

let edad = hoy - nacimiento;
if (cumple === "no") {
    edad = edad - 1;
}
let etapa = "";
if (edad < 18) {
    etapa = "Menor de edad";
} else if (edad >= 18 && edad <= 30) {
    etapa = "Adulto joven";
} else if (edad >= 31 && edad <= 59) {
    etapa = "Adulto";
} else {
    etapa = "Adulto mayor";
}
alert("Tu edad es " + edad + " años y eres: " + etapa); */