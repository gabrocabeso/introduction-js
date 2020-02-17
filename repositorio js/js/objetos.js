/* ===============
   O B J E T O S
 =================

¿Qué es un objeto?
Un objeto o diccionario, es una representación de un objeto del mundo real llevado al código.
Los objetos pueden guardar mucha información utilizando los tipos que ya hemos visto en las variables, así como los que vayamos creando utilizando las clases.

Un objeto tiene la siguiente estructura:
{
    clave1: valor1,
    clave2: valor2,
    .
    .
    .
    claveN: valorN
}

*/

//Ejemplos más complejos:
var Rick = {
    nombre: "Rick",
    apellido: "Sánchez",
    edad: "70",
    aficiones: ["megasemillas", "cristales kalaxianos"],
    familiares: {
        nieto: Morty
    }
};

var Morty = {
    nombre: "Morty",
    apellido: "Smith",
    edad: 14,
    aficiones: ["Jessica", "purgar"],
    familiares: {
        abuelo: Rick
    }
};

//Se puede acceder a los objetos de dos formas:
console.log(Morty.apellido);
console.log(Morty["apellido"]);


//Si uno de los operandos es un String como en el caso de la edad de Rick:
console.log("Sumando un número como String y un Number =>", Rick.edad + Morty.edad);
//Deberíamos aplicarle un operador de casteo para que realice bien la operación.
console.log("Aplicando un operador de casteo Number() =>", Number(Rick.edad) + Morty.edad);


//¿Qué devolverá?
console.log("Familiares de Rick:", Rick.familiares);

//¿Qué devolverá?
console.log("Familiares de Morty:", Morty.familiares);

//Si queremos acceder a la segunda afición de Rick a través de Morty, ¿cómo lo harías?
//Haz un console log que muestre el resultado.