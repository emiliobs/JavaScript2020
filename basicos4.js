// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena = "") => {
	if (!cadena) return console.warn("No ingresaste un cadena de texto.");

	if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto.`);

	cadena = cadena.toLocaleLowerCase();
	let vocales = 0, consonantes = 0;

	for (let letra of cadena) {
		if (/[aeiouáéíóú]/.test(letra)) vocales++;
	}

	for (let letra of cadena) {
		if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
	}

	return console.info({
		cadena,
		vocales,
		consonantes
	});

};
contarLetras();
contarLetras(4588);
contarLetras(" ");
contarLetras("");
contarLetras("Emilio Barrera");
contarLetras("ÑoÑO");
contarLetras("Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium atque est. Commodi dolore minima quidem modi accusantium nobis porro dicta tenetur ipsum nihil quas ut, voluptatibus numquam harum labore.");

console.log("Programa 19");
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre = "") => {
	if (!nombre) return console.warn("No ingresaste un nombre");

	if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, No es una cadena de texto.`);

	let expRegular = /^[A-Za-zÑñÁÉIÓÚáéíóúüÜ\s]+$/g.test(nombre)

	return (expRegular) ? console.info(`${nombre}, es un nombre válido`)
		: console.warn(`${nombre}, No es un nonbre válido.`);
}

validarNombre();
validarNombre("");
validarNombre(" ");
validarNombre(45454545454);
validarNombre("Emilio");
validarNombre("Emilio Barrera, 45");
console.log("Programa 20");
// // 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email = "") => {
	if (!email) return console.warn("No ingresaste un email.");

	if (typeof email !== "string") return console.error(`Èl valor "${email} ingresado, No es una cadena de texto"`);

	let expRegular = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

	return (expRegular) ? console.info(`${email}, Es un Email válido`)
		: console.warn(`${email}, No es un email válido.`);

};

validarEmail();
validarEmail(" ");
validarEmail("55555.com");
validarEmail("emilio@gmail.com");
validarEmail("emilio.@gmail.com.com");
validarEmail("emilio.gmail.com.co");

console.log("Programa fusión 19 y 20");

const validarPatron = (cadena = "", patron = undefined) => {
	if (!cadena) return console.warn("No ingresaste un cadena.");

	if (typeof cadena !== "string") return console.error(`Èl valor "${cadena} ingresado, No es una cadena de texto"`);

	if (!patron) return console.warn("No ingresaste un patrón.");
	
	if (!patron === undefined) return console.warn("No ingresaste un patrón a evaluar.");

	if (!(patron instanceof RegExp)) return console.error(`Èl valor "${patron} ingresado, No es una expresión regular."`);

	let expRegular = patron.test(cadena);
	// let expRegular =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

	return (expRegular) ? console.info(`${cadena}, Cumple con el patrón ingresado.`)
		: console.warn(`${cadena}, No cumple con el patrón ingresado.`);

};

validarPatron();
validarPatron("55","emilio");
validarPatron("emilio@gmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
validarPatron("emilio barrera", /^[A-Za-zÑñÁÉIÓÚáéíóúüÜ\s]+$/g);





