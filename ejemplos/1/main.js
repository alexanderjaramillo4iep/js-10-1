/*
// imprimir hola mundo en consola
console.log('hola mundo');

// definición de variables
// en python: nombre_variable = valor
var nombre_variable = "Alex";
// otra forma de definir variables (nuevo)
let numero = 7;
// constantes
const nombre_constante = "nombre";

//imprimir variables en consola
console.log(nombre_constante, nombre_variable, numero);

const suma1 = 5 + 4;
console.log(suma1);

const suma2 = suma1 + numero;
console.log(suma2);

let ejConcatenar = nombre_constante + nombre_variable;
console.log(ejConcatenar);

let texto_a_mostrar = "5 + 4 = " + (5 + 4);
console.log(texto_a_mostrar);

let miNombre = "Alex";
let minombre = "Pepito";
console.log(miNombre, minombre);*/

/* esto es un comentario
que puede tener varias
líneas y sigue siendo
un comentario */
/*
let numero = 5;
console.log('numero+1', numero+1);
console.log('numero-1', numero-1);
console.log('numero%2', numero%2);
console.log('numero++', numero++);
console.log(numero);
console.log('numero--', numero--);
console.log(numero);

*/
/*
let nombre = "Alex";
let apellido = "Jaramillo";
console.log(nombre + " " + apellido);

let arreglo = [1,2,3,4,5];
console.log(arreglo);


let objeto = {
    nombre: 'Alexander Jaramillo', 
    edad: 29, 
    comidaFavorita: ['Bandeja Paisa', 'Salchipapas']
};
console.log(objeto);
*/
/*
function suma(num1, num2) {
    return num1 + " + " + num2 + " = " + (num1 + num2);
}
console.log(suma(78, 24));
*/


/**
 * Funcion que imprime de un objeto el nombre y la edad
 * Modificar para que imprima así:
 *  Mi nombre es Alexander Jaramillo y tengo 29 años
 */
function nombreYEdad(objeto) {
    const textoAImprimir = "Mi nombre es " + objeto.nombre + " y tengo " + objeto.edad + " años";
    console.log(textoAImprimir);
}

let objeto = {
    nombre: "Alexander Jaramillo",
    edad: 29
};
nombreYEdad(objeto);