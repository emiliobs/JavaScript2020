//clases en jsva script:
class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Métodos:
  sonar() {
    console.log("Hago sonido por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }

}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
     }

     sonar()
     {
       console.log("Soy un perro y mi sonido es un ladrido.");
     }

     ladrar(){
       console.log("Guauuuu Guauuuuuuu");
     }

    }



const mimi = new Animal("Mimi", "Hembra"),
  scooby = new  Perro("Scooby", "Macho","Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();