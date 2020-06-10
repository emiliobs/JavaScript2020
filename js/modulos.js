import   saludar, { Saludar, PI, usuario} from "./constantes.js"
// import {  sumar, restar } from "./arimetica.js";
import {  arimetica  as calculos } from "./arimetica.js";
console.log("Archivos Modulos.js");
console.log(PI);
console.log(usuario);
//console.log(password);
saludar();

// console.log(sumar(5, 5));
// console.log(restar(55, 5);
console.log(calculos.sumar(5,5));
console.log(calculos.restar(55,5));
//saludar();
let saludo = new Saludar();
saludo;





