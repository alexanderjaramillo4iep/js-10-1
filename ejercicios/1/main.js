//@ts-check
/**
 *************************************************************************** 
 * Función suma
 * Dados dos números n1 y n2 retornar la suma
 */
function suma (n1, n2) {
    return n1 + n2;
}
console.log(suma(4,9));

/**
 *************************************************************************** 
 * Función resta
 * Dados dos números n1 y n2 retornar la resta
 */
function resta (n1, n2) {
    //completar
}
console.log(resta(4,9));

/**
 *************************************************************************** 
 * Función multiplicacion (sin tildes al programar)
 * Dados dos números n1 y n2 retornar la multiplicación
 */
// Definir la función y hacer lo que dice la descripción
// imprimir en consola la respuesta de la funcion multiplicar

/**
 *************************************************************************** 
 * Función imprimirCarro
 * Dado un objeto tipo carro imprimir (no retornar):
 * nombre, modelo, peso, color
 */
function imprimirCarro(carro) {
    console.log(carro.nombre, carro.modelo, carro.peso, carro.color);
}
const carro = {
    nombre: "Fiat",
    modelo: 2009,
    peso: "900kg",
    color: "azul",
};
imprimirCarro(carro);

/**
 *************************************************************************** 
 * Función imprimirCarro2
 * Dado un objeto tipo carro imprimir (no retornar):
 * el vehículo carro.nombre de color carro.color modelo carro.modelo pesa carro.peso
 */
function imprimirCarro2(carro) {
    //modificar la siguiente línea
    console.log(carro.nombre, carro.modelo, carro.peso, carro.color);
}
// llamar la función imprimirCarro2 con un objeto carro diferente al anterior

