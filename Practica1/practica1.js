let nombre = "Armando";
let edad = 25;

nombre = "Ana Maria";

const saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";

console.log(saludo);

/*
    function cuadrado(numero) {
        return numero * numero;
    }
*/

const cuadrado = numero => numero * numero;

console.log(cuadrado(1));
console.log(cuadrado(2));
console.log(cuadrado(3));

