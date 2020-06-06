/* Funciones Anonimas Autoejecutables */

(function () {
  console.log("Mi primer IIFE");
  

})();

(function (d,w,c) {
  
console.log("Mi Segunda IIFE");
console.log(d);
console.log(w);
c.log("Este es un console.log");
})(document,window,console);

/*Formar de escribir las funciones Ançonimas  Autoejecutables*/
//Clasica
(function (params) {
  console.log("Versión clasica");
  
})();

//La Crockford(Javascript the good Parst
((function () {
  console.log("Versión Crockford");
  
})());

//Unaria
+function() {
  console.log("Versión Unaria");
  
}();

//Facebook
!function () {
  console.log("Versión Facebook.!");
  
}();