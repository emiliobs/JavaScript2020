// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (numero = undefined) => 
{
	if (numero === undefined)  return console.warn("No ingresaste un Número."); 
	
	
	if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un Número`);

	if(numero === 0) return console.error("El Número no puede ser 0");
 
	if(numero === 1) return console.error("El Número no puede ser 1");

	if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

	let divisible  = false;

	for (let i = 2; i <  numero; i++) 
	{
		if ((numero % i)  === 0) 
		{
			divisible = true;
			break;	
		}
		
	}
	return(divisible) ? console.log(`El número ${numero}, No es primo`) : console.log(`El número ${numero}, Si es primo`)	;

};

// numeroPrimo();
// numeroPrimo("");
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(-45);
// numeroPrimo(200);
numeroPrimo(200);

console.log("Programa 13");
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numeroPar = (numero = undefined) => {
		if(numero === undefined) return console.warn("No ingresaste un número.");
		if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado no es un número.`);

		return ((numero % 2) === 0) ? console.info(`El número ${numero} es Par.`) : console.info(`El número ${numero} es Impar`);
};

numeroPar();
numeroPar(-50);
numeroPar("45");
numeroPar(55);

console.info("Programa 14");
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (grados = undefined,  unidad = undefined) => 
{
	if(grados === undefined) return console.warn("NO ingresaste grados a convertir");

	if(typeof grados != "number") return console.error(`El valor "${grados} ingresado No ees un número.`) ;

	if(unidad === undefined) return console.warn("NO ingresaste el tipo de grado a convertir");

	if(typeof unidad != "string") return console.error(`El valor "${unidad}"  ingresado, No es una cadena de texto.`);

	if(unidad.length !== 1 || !/C|F/.test(unidad)) return console.warn("Valor de unidad no reconocido.");

	if(unidad === "C"){
		return console.info(`${grados}ºC = ${Math.round((grados * (9 / 5) + 32))}ºF`);
	}else if(unidad === "F"){
		return console.info(`${grados}ºF = ${Math.round((grados - 32) * (5 / 9))}ºC`);
	}
	else{
		return console.error("El tipo de grados a convertir No es Valido.");
	}

	console.info("Fooukk  yeaaaaa.");

};

// convertirGrados();
// convertirGrados("2");
// convertirGrados(2);
// convertirGrados(2,"Emilio");
// convertirGrados(5,"E");
convertirGrados(5,"C");
convertirGrados(32,"F");