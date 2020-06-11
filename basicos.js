// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá 10.
// function contarCaracteres(cadena = "") {
//     if (!cadena) {
//         console.warn("No se Ingreso ninguna información");
//     } else {
//         console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
//     }
// }
// contarCaracteres();
// contarCaracteres("Hola Mundo");

const contarCaracteres = (cadena = "") =>
    (!cadena) ?
    console.warn("No se ingreso Ninguna información") :
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);

contarCaracteres();
contarCaracteres("Hola Mundo");

console.log("Program 02");


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortarTexto = (cadena = "", longitud = undefined) => (!cadena) ? console.warn("No Se ingreso Datos") : (longitud === undefined) ? console.warn("No has ingresado la longitud para recortar el texto") : console.info(cadena.slice(0, longitud));
recortarTexto("Hola Emilio", 6);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto("", 6);

console.log("Program 03");

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].
const cadenaAAreglo = (cadena = "", separador = undefined) => (!cadena) ? console.warn("NO ha ingreso ningun dato.") : (separador === undefined) ? console.warn("NO ingresaste el caracter Depaarador.") : console.info(cadena.split(separador));
cadenaAAreglo();
cadenaAAreglo("Emilio Barrera");
cadenaAAreglo("", ' ');
cadenaAAreglo("Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex veritatis, nobis incidunt possimus eaque soluta dolore atque aperiam voluptatem, nisi velit est eos deserunt aliquam. Tenetur quos consequuntur fugiat?", ' ');
cadenaAAreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");

console.log("Program 04");
// 4) Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirTexto = (texto = "", veces = undefined) => {

    if (!texto) return console.warn("No ingresaste texto");

    if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

    if (Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");

    for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);



};

repetirTexto();
repetirTexto("Emilio");
repetirTexto("", 5);
repetirTexto("Emilio", 5);