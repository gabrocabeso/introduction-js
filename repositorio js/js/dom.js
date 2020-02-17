/* MODELOS DE OBJETOS DEL DOCUMENTO

DOM es una estructura de objetos que genera el navegador cuando se carga un documento. Se puede alterar mediante JS para cambiar dinámicamente los contenidos y aspecto de la página.
*/

//Acceder a un elemento por su Id:
var caja = document.getElementById("caja");

//También puedes acceder a un id utilizando # de esta forma:
var caja = document.querySelector("#caja");

console.log("caja ", caja);

//Para acceder a múltiples elementos con un mismo Id:
var cajas = document.querySelectorAll("#cajas");
console.log("cajas ", cajas);

caja.style.width = "200px"
caja.style.height = "200px"
caja.style.background = "red"