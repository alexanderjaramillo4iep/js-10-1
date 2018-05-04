/**
 * Condicionales y control de flujo
 */
/**
 * En python se hacía de esta manera:
if condicion:
	si se cumple condicion
elif condicion2:
	si no se cumple condicion
	pero si se cumple condicion2
else:
	si no se cumple condicion 1 ni condicion2
 */
let variable = 5;
if (variable > 5) {
	console.log('la variable es mayor a 5');
} else if (variable < 5) {
	console.log('la variable es menor a 5');
} else {
	console.log('la variable es 5');
}

function notaDescriptiva(nota) {
	if(nota < 3.5) {
		return 'bajo';
	} else if (nota < 4) {
		return 'básico';
	} else if (nota < 4.6) {
		return 'alto';
	} else {
		return 'superior';
	}
}
console.log(notaDescriptiva(4.8));