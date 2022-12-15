const mapa = new Map();

mapa.set("nombre", "Emilio");
mapa.set("apellido", "Barrera");
mapa.set("edad", "55");

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Emilio Antonio Barrera");
console.log(mapa.get("nombre"));
mapa.delete("apellido");

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});

console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  ["nombre", "Carla"],
  ["Edad", 55],
  ["persona", "humano"],
  [null, "nulo"],
]);

console.log(mapa2);

const llavesMap2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa.values()];

console.log(llavesMap2);
console.log(valoresMapa2);
