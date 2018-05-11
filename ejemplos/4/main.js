/**
 * Ciclos en javascript
 */
/* 
// en python: for x in [1,2,3]:
console.log('ciclo while');
let i = 0;
while(i < 10) {
	console.log(i);
	i++;
}
console.log("ciclo for");
// otra forma de hacer ciclos o loops
// for(primero;segundo;tercero)
for (let j = 0; j < 10; j++) {
	console.log(j);
} 
let arreglo = [1, 2, 'hola', 'chao', 10, 5, 'hola otra vez'];
console.log(arreglo);
console.log(arreglo[3]);
for (let i = 0; i < arreglo.length; i++) {
	let elemento = arreglo[i];
	console.log(elemento);
}
*/
let precios = [3000, 2000, 1500, 8000];
let productos = ['panela', 'leche', 'huevos', 'carne'];
for (let i = 0; i < precios.length; i++) {
	let precio = precios[i];
	let producto = productos[i];
	console.log(producto + ':\t$' + precio);
}