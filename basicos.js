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