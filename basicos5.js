// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
console.info("Ejercicio 21");

//Validaciones:
const devolverCuadrado = (arr = undefined) => 
{

	if (arr === undefined) return console.warn("No ingresaste un arreglo de Números."); 

	if (!(arr instanceof Array)) return console.error("El valor qie ingresaste no es un arreglo");

	if(arr.length === 0) return console.error("El arreglo esta vacío");

	for (let num of arr)
	{
		if(typeof num !== "number") return console.error(`Èl valor "${num}" ingresado, No es un Número.`);
	}

	const newArr = arr.map(el => el * el);

	return console.info(`Àrreglo Original: ${arr}, \n Arreglo elevado al cuadrado: ${newArr}`);

};

devolverCuadrado();
devolverCuadrado(true);
devolverCuadrado({});
devolverCuadrado([]);
devolverCuadrado([1,5,"3",4,{}]);
devolverCuadrado([1,4,{}]);
devolverCuadrado([1,5,8,]);

console.info("Ejercicio 22");

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
//Validaciones:
const arrayMinMax = (arr = undefined) => 
{

	if(arr === undefined) return console.warn("No ingresaste un Arreglo de Números");

	if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
	
	if(arr.length === 0) return console.error("El Arreglo esta vacío");

	for (let num of arr)
	{
		if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
	};
		
return console.info(`Arreglo Original: ${arr}\nValor Mayor: ${Math.max(...arr)},\nValor Menor: ${Math.min(...arr)}`);
	

};
arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([5,8,true]);
arrayMinMax([1, 4, 5, 99, -60]);

console.info("Ejercicio 23");
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arr = undefined) => {

	if(arr === undefined) return console.warn("No ingresaste un Arreglo de Números");

	if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
	
	if(arr.length === 0) return console.error("El Arreglo esta vacío");

	for (let num of arr)
	{
		if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
	};

	return console.info({
		pares: arr.filter(num => num  % 2 === 0),
		impares: arr.filter(num => num % 2 === 1)
	});

};
separarParesImpares();
separarParesImpares("Emilio");
separarParesImpares([1,5,"78"]);
separarParesImpares([1,2,3,4,5,6,7,8,9,0]);
