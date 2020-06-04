/*
	Cortocircuito OR - cuando el valor de  la izquierda en la expresion siempre puede validar al true, es el valor que se cargará siempre puede validar a true, es el valor que se cargarra por por defecto.
	
	Cortocircuito AND - cuando el valor de a izquierda en la expresion siempre puede validar a false, es el valor que se cargaraá por defecto.
*/

function  saludar(nombre ) {
	nombre = nombre || "Desconocido"
	
	console.log(`Hola ${nombre}`);
	
}
saludar("Emilio");
saludar();
console.log("cadena" || "valor de la cadena");
console.log(55 || "valor de la cadena");
console.log(true || "valor de la cadena");
console.log([] || "valor de la cadena");
console.log({} || "valor de la cadena");
console.log(false || "valor de la cadena");
console.log(null || "valor de la cadena");
console.log(undefined || "valor de la cadena");
console.log("" || "valor de la cadena");
console.log(-2 || "valor de la cadena");
console.log(undefined && "valor de la cadena");
console.log(false && "valor de la cadena");
console.log(null && "valor de la cadena");
console.log(undefined && "valor de la cadena");
console.log("" && "valor de la cadena");
console.log(-2 && "valor de la cadena");
console.log("cadena"  && "valor de la cadena");
console.log(55 && "valor de la cadena");
console.log(true && "valor de la cadena");
console.log([] && "valor de la cadena");
console.log({} && "valor de la cadena");




