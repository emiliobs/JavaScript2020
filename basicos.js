//POO
/*
 Clase - Modelo a seguir.
 Objetos - Es una instancia de una clase
 -Atributos - Es una caracteristica o propiedad del objeto(sonvariable dentro de un objeto)
 -Métodos - Son acciones que un objeto puede realizar(son funciones de de un objeto) 
*/

//OBJETO LITERAL
console.log("Objeto Literal");

const animal = {

  nombre: "Emilio",
  sonar() {
    console.log("Hago sonido por que estoy vivo.....");
  }

}
console.log(animal);

const animal2 = {
  nombre: "Emilia",
  sonar() {
    console.log("Hago sonido por que estoy vivo.....");
  }

}

console.log(animal2);

console.log("Función Constructora");

//Fucnción constructora:
function Animal(nombre, genero) {
  //atributos
  this.nombre = nombre;
  this.genero = genero;
  //Métodos
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo.!!!");
  }
  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

const snoopy = new Animal("Anoopy", "Macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();

//Función Contructora donde asignamos los métodos al Protipo, no a la funcion como tal.
console.log("Función Constructora con Prototipos");

function AnimalP(nombre, genero) {
  //atributos
  this.nombre = nombre;
  this.genero = genero;
}

//Métodos
AnimalP.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo.!!!");
}
AnimalP.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
}

const snoopyP = new AnimalP("Anoopy", "Macho"),
  lolaBunnyP = new AnimalP("Lola Bunny", "Hembra");

console.log(snoopyP);
console.log(lolaBunnyP);

snoopyP.sonar();
snoopyP.saludar();

lolaBunnyP.sonar();
lolaBunnyP.saludar();