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
    this.raza = null;
     }

     sonar()
     {
       console.log("Soy un perro y mi sonido es un ladrido.");
     }

     ladrar(){
       console.log("Guauuuu Guauuuuuuu");
     }

     //Un mẃtodo estatico se pueden ejecutar sin necesidad de intancias la clase:
    static  queEres(){
      console.log("Los perros somos animales mamíferos que pertenecemos a la familia de loa caninos. somos considerados los mejores amigos del hombre.");
    }

    get getRaza(){
      return this.raza;
    }

    set setRaza(raza)
    {
      this.raza = raza;
    }


    }


    Perro.queEres();


const mimi = new Animal("Mimi", "Hembra"),
  scooby = new  Perro("Scooby", "Macho","Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza ="gràn Danés";
console.log(scooby.getRaza);
