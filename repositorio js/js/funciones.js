/* ===============
 F U N C I O N E S
 =================

¿Qué es una función?
Una función es un conjunto de líneas de código que realizan una tarea específica y pueden retornar, o no, un valor.

Además las funciones pueden contener parámetros y tener valores por defecto.

Otra cosa curiosa es que no existe sobrecarga de funciones en JS.
*/

//Declaración de una función SIN parámetros
function saludar() {
    console.log("Hola a todos.");
}

//Ejecución de una función
saludar();


//Declaración de una función CON parámetros.
function suma(x, y) {
    return (x + y);
}
console.log("suma(1, 3) = ", suma(1, 3));


// También se puede declarar una función dentro de una variable.
var suma2 = function (x, y) {
    return (x + y);
}
console.log("suma2(3, 3) = ", suma2(3, 3));

//Utilizando argumentos variables "arguments"
function suma3() {
    var resultado = 0;
    Array.from(arguments).forEach(element => {
        resultado += element;
    });
    return resultado;
}
console.log("suma3(3, 5, 1) = ", suma3(3, 5, 1));

//Utilizando recursividad.
var suma4 = function (array) {
    if (array.length == 0) {
        return 0;
    }
    else {
        return array[0] + suma4(array.slice(1))
    }
}
console.log("suma4([2, 7]) = ", suma4([2, 7]));

//Otra forma de recursividad
var suma5 = function (array) {
    return (array.length === 0) ? 0 : array[0] + suma5(array.slice(1));
}
console.log("suma5([1,2,4,6]) = ", suma5([1, 2, 4, 6]));

//Suma con valores por defecto
function suma6(x = 1, y = 5) {
    return x + y;
}
console.log("suma6() = ", suma6());

//Fibonacci usando recursividad:
function fibonacci1(n) {
    if (n === 0 || n === 1) return 1;
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}
console.log("fibonacci1(5)", fibonacci1(5));


//Fibonacci usando recursividad en una sola línea utilizando un operador ternario:

function fibonacci2(n) {
    return (n === 0 || n === 1) ? 1 : fibonacci2(n - 1) + fibonacci2(n - 2);
}
console.log("fibonacci2(5)", fibonacci2(5));

for (var i = 0; i < 11; i++) {
    console.log("fibonacci de " + i + " es " + fibonacci2(i));
}