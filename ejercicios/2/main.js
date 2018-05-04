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
const texto = "hola mundo";
const palabra = "mundo";
console.log(
  "el texto '" + texto + "' tiene la palabra '" + palabra,
  buscaPalabras(texto, palabra)
);

/**
 *
 */
