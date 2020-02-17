/* ===============
 V A R I A B L E S 
 =================

¿Qué es una variable?
Una variable es un espacio de memoria asociado a un nombre o identificador.
Las variables sirven para almacenar datos y poder acceder a ellos de forma sencilla.

Para crear una variable se utiliza la palabra reservada "var".

SIEMPRE las variables las empezamos en minúscula por convención y, a ser posible, en inglés, aunque se pueden crear en español e incluir tildes, caracteres especiales, etc, pero esto podría hacer que nuestro programa diese errores en algunos frameworks.

Si la variable necesitara de dos palabras utilizaremos CamelCase. Ejemplo: var holaMundo
*/

//Números
var integer = 1;
console.log("number", integer);
var float = 0.1;
console.log("float", float);

//Strings
var string = "Hola mundo";
console.log("string", string);

//Booleanos
var verdadero = true;
console.log("verdadero", verdadero);
var falso = false;
console.log("falso", falso);

//Array
var colors = ["white", "black", "blue", "red", "yellow", "pink"]
console.log("colors", colors);
var cajónDeSastre = [1, "hola mundo", true]
console.log("cajónDeSastre", cajónDeSastre);
console.log("cajónDeSastre[1]", cajónDeSastre[1]);

//Objetos (Diccionarios o JSON). Se verán con más detalle en objetos.js
var car = {
    marca: "VolksWagen",
    modelo: "Polo",
    año: 2010,
    matrícula: "1234ABC",
    nºBastidor: "1G1YM3D78E5732310"
}
console.log("car.nºBastidor", car.nºBastidor);


//Undefined
var noDefinido = undefined
console.log("noDefinido", noDefinido);

//Not a Number NAN
var notANumber = NaN;
console.log("notANumber", notANumber);