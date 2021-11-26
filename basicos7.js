// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

// En el video 43 te daré mi solución, antes de verlo trata de resolver los ejercicios, y comparte tus resultados en alguna plataforma como GitHub o CodePen y comparte el enlace de tus soluciones en los comentarios de este video.
class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDiretor(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      " Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los Géneros aceptados son: ${Pelicula.listaGeneros.join(".")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor)
      return console.warn(
        `${propiedad} "${valor}" ingresado, No es una cadena de texto`
      );

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es una cadena de texto`
      );

    return true;
  }

  validarLogitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).)`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es un número.`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}Ingresado, no es un Arreglo.`
      );

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene Datos.`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena}" ingresado, No es una cadena de texto.`
        );
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los  restantes números.`
        );
      }
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Año de Estreno "${this.estreno}" no es válido, debe ser un número de 4 digitos.`
        );
      }
    }
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Genéros", generos)) {
      for (let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género(s) inorrectos "${generos.join(",")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `La calificaión tiene que estar en un rango entre 0 y 10`
          )
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) {
      this.validarLogitudCadena("Título", titulo, 100);
    }
  }

  validarDiretor(director) {
    if (this.validarCadena("Diretor", director)) {
      this.validarLogitudCadena("Director", director, 50);
    }
  }

  fichaTecnica() {
    console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"
                      \nDirector: "${this.director}"
                      \nAño: "${this.estreno}"
                      \nPaís: "${this.pais.join("-")}"
                      \nGéneros: "${this.generos.join(",")}"
                      \nCalificación: "${this.calificacion}"
                      \nMDB Id: "${this.id}"`);
  }
}
//Pelicula.generosAceptados();
// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo:
//     "1234567891012345678910123456789101234567891012345678910123456789101234567891012345678910123456789",
//   director: "EmilioEmilioEmilioEmilioEmilioEmilioEmilioEmilio",
//   estreno: 2022,
//   pais: ["Colombia", "Francia", "México", "Uruaguy", "Ecuador"],
//   generos: ["Comedy", "Crime"],
//   calificacion: 5.555
// });

// peli.fichaTecnica();

const  misPelis =[ 
{
  id:"ee5555555",
  titulo:"All for love",
  director: "Emilio Barrera",
  estreno: 2021,
  pais:["USA"],
  genero: ["Action","Drama"],
  calificacion:5.5

},
{
id:"ee5555555",
  titulo:"All for love",
  director: "Emilio Barrera",
  estreno: 2021,
  pais:["USA"],
  genero: ["Action","Drama"],
  calificacion:5.5
},
{
id:"ee5555555",
  titulo:"All for love",
  director: "Emilio Barrera",
  estreno: 2021,
  pais:["USA"],
  genero: ["Crime"],
  calificacion:5.5
}
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());