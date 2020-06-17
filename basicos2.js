// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);

aleatorio();

console.log("Programa 10");
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero = 0) => {
	if (!numero) return console.warn("No ingresaste un número.");

	if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un Número`);

	//Convierto un numero a string:
	 
	let alreves  = numero.toString().split("").reverse().join("");

	return ( numero.toString() === alreves) 
	? console.info(`Si es capícua original ${numero}, Número al revés ${alreves}`) 
	: console.info(`No es capícua, Número original ${numero}, Número al revés ${alreves}`);	
};

capicua();
capicua("");
capicua("55");
capicua(55);
capicua(132);
capicua(2002);
capicua({});
capicua(55.5);
capicua(212.212);

console.log("Programa 11");
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (numero = undefined) =>
{
		 if(numero === undefined) return console.warn("No ingresaste un Número.");
		 
		 if(typeof numero !== "number") return console.error(`Èl valor "${numero} ingresado, NO es un número."`);
		 
		 if(numero === 0) return console.error("El número no puede ser  0");

		 if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

		 let factorial = 1;
		 for (let i = numero; i  > 1; i--) 
		 {
			 factorial *= i;
			 
		 }

		 return console.info(`El factorial de ${numero} es ${factorial}`);	 

};

factorial();
factorial({});
factorial("");
factorial(-5);
factorial([5,2,6,-4]);
factorial(5);
factorial(55);