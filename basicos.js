console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha apasado en nuestra aplicación");

let nombre = "Emilio", apellido = "Barrera" , edad = "35";
console.log(nombre, apellido, edad);
console.log(` Hola mi nombre es ${nombre} ${ apellido } y tengo ${ edad } años. `);

console.log(` Hola mi nombre es %s %s  y tengo %d años`, nombre, apellido, edad);
console.clear();

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);
console.clear();

console.group("Curso de @emiliobarrera");
console.log("Curso de javascript");
console.log("Curso de Node.js");
console.log("Curso de  PWAs");
console.log("Curso de Flexobox");
console.log("Curso de diseo y progrmación web");
console.groupEnd();

console.groupCollapsed("Curso de @emiliobarrera");
console.log("Curso de javascript");
console.log("Curso de Node.js");
console.log("Curso de  PWAs");
console.log("Curso de Flexobox");
console.log("Curso de diseo y progrmación web");
console.groupEnd();

console.clear();

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5], vocales = ["a","e","i","o","u"];
console.table(numeros);
console.table(vocales);

const perro = 
{
	 nombre: "Emilio",
	 raza: "Boxer",
	 color:"cafe"	

}

console.table(perro);
console.clear();

console.time("Cuanto tiempo tarda mi código");
const arreglo = Array(1000000);
for (let i = 0; i < Array.length; i++) 
{
	   arreglo[i] = i;
	
}

console.timeEnd("Cuanto tiempo tarda mi código");
console.log(arreglo);

console.clear();

for (let i = 0; i < 100; i++) {

	console.count("Código for");
	console.log(i);

}

console.clear();

	let x =5,
	 y = 2; 
	let pruebaXY = "Se espera que X sea menor que Y";
console.assert(x < y,{x,y, pruebaXY});