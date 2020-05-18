// const saludo = () => console.warn("Hola");
// saludo();

// const saludo = (nombre) => console.warn(`Hola ${nombre}`);
// saludo("Emilio Barrera");

const saludo = nombre => console.warn(`Hola ${nombre}`);
saludo("Emilio Barrera");

// const sumar = function (a, b) {
//   return a + b;
// }
// console.warn(sumar(5, 8));

const sumar = (a, b) => a + b;
console.warn(sumar(9, 5));

const funcioDeVariasLineas = () => {

  console.warn("Uno");
  console.warn("Dos");
  console.warn("Tres");

};

funcioDeVariasLineas();
console.log("------------------------------------------");
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (el, index) {
  console.warn(`El elemento ${el} esta en la posición ${index}`);
});

console.log("------------------------------------------");
numeros.forEach((el, index) => console.log(`${el} esta en la posicion ${index}`));

console.log("------------------------------------------");

// function Perro() {

//   console.warn(this);

// }

// Perro();

const perro = {
  nombre: "Emilio",
  hablar: function () { console.log(this) }

};
perro.hablar()

console.log("------------------------");

// Mucho cuida con un objeto que tenga integrada un función,  se conporta como una función, y si lleva una función de flecha tien un comportamiendo diferente  como objeto del windows con le this.

const humano = {
  nombre: "Emilio",
  hablar: () => console.log(this)

};

humano.hablar();
console.log("-------------------------------------");
const animal = {
  nombre: "Perro",
  ladrar() {
    console.log(this);
  }
}
animal.ladrar();

