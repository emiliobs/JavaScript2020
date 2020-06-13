// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (cadena = "") => (!cadena) ? console.warn("No ingresaste  una cadena de valor.") : console.info(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("Emilio Barrera");
invertirCadena("Javascript es un lengiaje de programación increible.");
invertirCadena("Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo debitis quod in nam nobis perferendis adipisci delectus commodi ab quidem necessitatibus, atque facilis sed molestias veritatis vero doloremque maxime! Laboriosam!");

console.log("Ejemplo 6");
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const textoEnCadena = (cadena = "", texto = "") => {
	if (!cadena) return console.warn("Ni ingresaste el texto largo");

	if (!texto) return console.warn("No ingresaste la palabra a  evaluar.");

	let i = 0, contador = 0;

	while (i !== -1) {
		i = cadena.indexOf(texto, i);
		if (i !== -1) {
			i++;
			contador++;
		}
	}

	return console.info(`La apalabra ${texto} se repite ${contador} veces.`);

};

textoEnCadena("", "");
textoEnCadena("", "Emilio");
textoEnCadena("Emilio Barrera, Emilio nacio en colombia y se llama Emilio");
textoEnCadena("Emilio Barrera, Emilio nacio en colombia y se llama Emilio", "Emilio");

console.log("Programa 7");
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (palabra = "") => {
	if (!palabra) return console.warn(("No ingresaste una palabra o frase."));

	palabra = palabra.toLowerCase();
	let alReves = palabra.split("").reverse().join("");

	return (palabra === alReves) ? console.info(`Si es palindromo, Palabra original "${palabra}", Palabra al revés "${alReves}"`) : console.info(`No es palindromo, Paabra original "${palabra}", Palbra al revés "${alReves}"`);

};

palindromo("");
palindromo("Emilio");
palindromo("Salas");

console.log("Programa 8");
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = "", patronAEliminar = "") =>
	(!texto)
		? console.warn("No ingresaste un Texto.")
		: (!patronAEliminar)
			? console.warn("No ingresaste un patrón a Elimminar de caracteres")
			: console.info(texto.replace(new RegExp(patronAEliminar, "ig"), ""));

			eliminarCaracteres();
			eliminarCaracteres("xyz1","");
			eliminarCaracteres("","xyz");
			eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5 ","xyz");
			eliminarCaracteres("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus commodi atque quaerat. Repellendus, a nesciunt? Sint non vel voluptatibus quibusdam error, ad beatae tempore similique consequuntur, ipsa officia eius!","[a-z]");
			
