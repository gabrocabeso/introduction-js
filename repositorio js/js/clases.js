/* ===============
    C L A S E S
 =================

¿Qué es una clase?
Una clase es un conjunto de líneas de código que nos permiten crear objetos y métodos que se les pueden aplicar a los mismos.

Las clases pueden heredar unas de otras. En el ejemplo, Humano hereda de la clase Personaje. Para extender o heredar de una clase utilizaremos la palabra reservada "extends";

En este ejemplo crearemos a los personajes principales de Rick y Morty, los cuales podrán presentarse y, además, relacionarse entre ellos como una familia.
*/

class Personaje {
    constructor(nombre, apellido, edad, aficiones = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.aficiones = aficiones;
    }

    presentarse() {
        switch (this.aficiones.length) {
            case (0):
                return "Hola, me llamo " + this.nombre + " " + this.apellido + ". Tengo " + this.edad + " años.";
            case (1):
                return "Hola, me llamo " + this.nombre + " " + this.apellido + ". Tengo " + this.edad + " años y me gusta " + this.aficionesToString();
        }
        return "Hola, me llamo " + this.nombre + " " + this.apellido + ". Tengo " + this.edad + " años y me gusta " + this.aficionesToString();
    };

    aficionesToString() {
        var aficiones = "";
        for (var i = 0; i < this.aficiones.length; i++) {
            aficiones +=
                //Si i es menor que la longitud -1 quiero que me muestre la afición y una coma. Si no, significa que está en el penúltimo elemento y debe mostrar 'y' al final, o en el último elemento y mostrará un punto al final.
                (i < this.aficiones.length - 1) ? this.aficiones[i] + ", " :
                    (aficiones.length > 1) ? "y " + this.aficiones[i] + "." : this.aficiones[i] + ".";
        }
        return aficiones;
    }
}


class Humano extends Personaje {
    familiares = {};

    constructor(nombre, apellido, edad, hombre = true, aficiones, familiares = {}) {
        super(nombre, apellido, edad, aficiones);
        this.hombre = hombre;
    }

    addFamiliar(key, value) {
        var reverseKey = "";
        this.familiares[key] = value;
        switch (key) {
            case ("abuelo"):
            case ("abuela"):
                reverseKey = (this.hombre) ?  "nieto" : "nieta;";
                break;
            case ("padre"):
            case ("madre"):
                reverseKey = (this.hombre) ? "hijo" : "hija";
                break;
            case ("hijo"):
            case ("hija"):
                reverseKey = (this.hombre) ? "padre": "madre";
                break;
            case ("hermano"):
            case("hermana"):
            reverseKey = (this.hombre) ? "hermano" : "hermana";
                break;
            case ("tío"):
            case ("tía"):
                reverseKey = (this.hombre) ? "sobrino" : "sobrina";
                break;
            case ("sobrino"):
            case ("sobrina"):
                reverseKey = (this.hombre) ? "tío" : "tía";
                break;
            case ("primo"):
            case ("prima"):
                reverseKey = (this.hombre) ? "primo" : "prima";
                break;
            case ("nieto"):
            case ("nieta"):
                reverseKey = (this.hombre) ? "abuelo" : "abuela";
                break;
            case ("marido"):
            case ("mujer"):
                reverseKey = (this.hombre) ? "marido" : "mujer";
                break;
        }
        value.familiares[reverseKey] = this;
    }
}

var Rick = new Humano("Rick", "Sánchez", 70, hombre = true, ["tirarme eructos", "megasemillas", "cristales kalaxianos", "Unidad"]);
//console.log(Rick.presentarse());

var Morty = new Humano("Morty", "Smith", 14, true, ["Jessica"]);
//console.log(Morty.presentarse());

var Jerry = new Humano("Jerry", "Smith", 35, true, ["Beth", "llorar"]);
//console.log(Jerry.presentarse());

var Beth = new Humano("Beth", "Smith", 35, false, ["beber vino", "pelear con Jerry"]);
//console.log(Beth.presentarse());

var Summer = new Humano("Summer", "Smith", 17, false, ["ligar con hombres", "pelear con Morty"]);
//console.log(Summer.presentarse());


Rick.addFamiliar("nieto", Morty);
Rick.addFamiliar("yerno", Jerry);
Rick.addFamiliar("hija", Beth);
Rick.addFamiliar("nieta", Summer);

Morty.addFamiliar("padre", Jerry);
Morty.addFamiliar("madre", Beth);
Morty.addFamiliar("hermana", Summer);

Jerry.addFamiliar("mujer", Beth);
Jerry.addFamiliar("hija", Summer);

Beth.addFamiliar("hija", Summer);

console.log(Rick, Morty, Jerry, Beth, Summer);