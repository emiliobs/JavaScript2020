/*
Expresiones Regulares:
Son una secuencia de caracteres que forman un patón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadena de caracteres.
*/

let cadena = "Lorem ipsum emilio dolor sit amet 5 consectetur adipisicing elit. Dolores sunt similique itaque iure repellat dolore atque 36 earum id  55 ut praesentium, repudiandae provident Emilio quibusdam doloribus? Laboriosam emilio provident error dolores quos assumenda!";
 
// let expReg = new RegExp("dolores","ig");
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

let expReg2 = /emilio/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));


 