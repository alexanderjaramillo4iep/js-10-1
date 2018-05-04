/**
 * Manejo de Strings
 */
// python: variable = "texto"
let variable = "texto";
let longitud = variable.length;// 5
// encontrar el índice de donde comienza una palabra en una cadena de caracteres
let encontrarPalabra = "seguimos con la clase".indexOf('clase');//16
console.log(variable, longitud, encontrarPalabra);

// partir una cadena desde la posición 2 hasta la posición 4
let partida = variable.slice(2, 4);
// partir y tomar la cadena desde el 2 en adelante
let partida2 = variable.slice(2);
// parte y devuelve los 2 últimos caracteres de la cadena
let partida3 = variable.slice(-2);
// tomar una subcadena desde la posición 1 hasta la posición 5
let subcadena = variable.substring(1, 5);
// tomar una subcadena desde la posición 3 que tenga los 2 siguientes caracteres
let subcadena2 = variable.substr(3, 2);
console.log(partida, partida2, partida3, subcadena, subcadena2);

let saludo = "hola mundo";
let reemplazado = saludo.replace('mundo', 'clase 10-1 media técnica');
console.log(saludo, reemplazado);

//upper y lower python: variable.upper() y variable.lower()
let may = saludo.toUpperCase();
let min = saludo.toLowerCase();
console.log(may, min);

let palabra2 = "alex";
let letraConLaQueEmpieza = palabra2.charAt(0);
let otraForma = palabra2[0];
console.log(palabra2, letraConLaQueEmpieza, otraForma);

let nombreCompleto = 'Jhon Alexander Jaramillo Muñoz';
let nombrePartido = nombreCompleto.split(' ');
console.log(nombrePartido, nombrePartido[2]);