/**
 ***************************************************************************
 * Función longitudTexto
 * Dado un texto, imprimir su longitud (cantidad de caracteres que contiene)
 */
// Crear la función y llamarla

/**
 ***************************************************************************
 * Función buscaPalabras
 * Dado un texto y una palabra, decir si el texto tiene la palabra dentro
 */
function buscaPalabras(texto, palabra) {
  let indice = texto.indexOf(palabra);
  if (indice >= 0) {
    return true;
  } else {
    return false;
  }
}
const texto = "La clase de hoy tiene mucha teoría";
const palabra = "teoría";
console.log(
  "el texto '" + texto + "' tiene la palabra '" + palabra,
  buscaPalabras(texto, palabra)
);

/**
 ***************************************************************************
 * Función ultimas5Letras
 * Dado un texto, retornar las últimas 5 letras que tiene el texto
 */
function ultimas5Letras(texto) {
	//completar
}
console.log(ultimas5Letras('hola mundo'));

/**
 ***************************************************************************
 * Función broma
 * Dado un texto, retornar el texto reemplazando hola por adios y
 * concatenar todo con una palabra broma
 * Ej: 'hola mundo' me retorna 'adios mundo cruel'
 */
//Definir la función y llamarla

/**
 ***************************************************************************
 * Funcion primeraYUltima
 * Dado un texto, retornar la primera y última letra concatenadas
 */
//Definir función y llamarla