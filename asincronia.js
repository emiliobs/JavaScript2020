// console.log("Inicio");
// setTimeout(() => {
//   console.log("<Ejecuntando un SetTimeout, esto se ejecuta una sóla vez");
// }, 3000);

// setInterval(() => {
//     console.log("Ejecutando un SetIntervalo, Se jecuta indifinidamente cada cierto intervalo de tiempo.");
// }, 1000);

// let temporizador = setTimeout(() => {
//   console.log(new Date().toLocaleDateString());
// }, 1000);

// clearTimeout(temporizador);

// console.log("Despues del Clear TimeOut....");
// let TeporizadorInterval = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// clearInterval(TeporizadorInterval);
// console.log("Despues del clearTimeInterval");
//ódigo Sincrono Bloqueante:
// (() => 
// {
//   console.log("Código Síncrono");
//   console.log("Inicio");

//   function dos() {
//      console.log("Dos");
//   }

//   function uno() {
//     console.log("Uno");
//     dos();
//     console.log("Tres");    
//   }

//   uno();
//   console.log("Fin");
// })();

// console.log("**********************************************");

// //Código Asincrono No Bloqueante:
// (() => 
// {
//      console.log("Código Asíncrono");
//      console.log("Inicio");

//      function dos() 
//      {
//          setTimeout(function () 
//          {
//            console.log("Dos");           
//          }, 1000);  
//      }

//      function uno() 
//      {
//       setTimeout(function ()
//        { 
//           console.log("Uno");
//        }, 0); 
//          dos();
//        console.log("Tres");
//      }

//      uno();
//      console.log("Fin");
// })();

// function  cuadradoCallBack(value, callback)
//  {
//      setTimeout(() => 
//      {
//         callback(value, value * value)
//      }, 0 | Math.random() * 1000); 
// }

// cuadradoCallBack(0, (value, result) => {
//   console.log("Inicia Callback");
//    console.log(`Callback: ${value}, ${result}`);
//    cuadradoCallBack(1, (value, result) => {
//      console.log(`Callback: ${value}, ${result}`);
//      cuadradoCallBack(2, (value, result) => {
//        console.log(`Callback: ${value}, ${result}`);
//        cuadradoCallBack(3, (value, result) => {
//          console.log(`Callback: ${value}, ${result}`);
//          cuadradoCallBack(4, (value, result) => {
//            console.log(`Callback: ${value}, ${result}`);
//            cuadradoCallBack(5, (value, result) => {
//              console.log(`Callback: ${value}, ${result}`);
//            });
//          });
//        });
//      });
//    });   
// }) ;
// function cuadradoPromise(value) {
//    if (typeof value !== "number")
//    {
//      return Promise.reject(
//        `Error, el valor " ${value} " Ingresado no es un Número`
//      );
// }

//   return  new Promise((resolve, reject) => {

//     setInterval(() => {
//       resolve({
//         value,
//         result: value * value
//       });
//     }, 0 | Math.random() * 1000);
//   });
//   }

  // cuadradoPromise(0) 
  //   .then((obj) => {
  //     console.log("Inicio Promise");
  //     console.log(`Promise: ${obj.value}, ${obj.result}`);
  //     return cuadradoPromise(1);
  //   })
  //   .then((obj) => {
  //     console.log(`Promise: ${obj.value}, ${obj.result}`);
  //     return cuadradoPromise(2);
  //   })
  //   .then((obj) => {
  //     console.log(`Promise: ${obj.value}, ${obj.result}`);
  //     return cuadradoPromise("3");
  //   })
  //   .then((obj) => {
  //     console.log(`Promise: ${obj.value}, ${obj.result}`);
  //     return cuadradoPromise(4);
  //   })
  //   .then((obj) => {
  //     console.log(`Promise: ${obj.value}, ${obj.result}`);
  //     return cuadradoPromise(5);
  //   })
  //   .then((obj) => {
  //     console.log(`Promise: ${obj.value}, ${obj.result}`);
     
  //   })
  //   .catch(err => console.error(err));

  /*Async - Await */
  function cuadradoPromise(value) {
    if (typeof value !== "number") {
      return Promise.reject(
        `Error, el valor " ${value} " Ingresado no es un Número`
      );
    }

    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve({
          value,
          result: value * value,
        });
      }, 0 | (Math.random() * 1000));
    });
  }

  async function funcioAsinronaDeclarada()
   {
    try 
    {
       console.log('Inicio Async Function');

       let obj = await cuadradoPromise(0);
       console.log(`Async Fucntion: ${obj.value}, ${obj.result}`);

       obj = await cuadradoPromise(1);
     console.log( `Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise(2);
     console.log(`Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise("3");
     console.log(`Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise(4);
     console.log(`Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise(5);
     console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (err)
  {
  console.error(err);
  }

   }
   funcioAsinronaDeclarada();

   console.log('****************************************');
   
   const funcionAsincronaExpresada = async () => {
     try {
    console.log('Inicio Async Function'); 
    
    obj = await cuadradoPromise(6);
     console.log( `Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise(7);
     console.log( `Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise(8);
     console.log( `Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise(9);
     console.log( `Async Function: ${obj.value}, ${obj.result}`);

     obj = await cuadradoPromise(10);
     console.log( `Async Function: ${obj.value}, ${obj.result}`);

     console.log('Fin Async Function');
    
     } catch (error) {
       console.error(error);
     }
   }

   funcionAsincronaExpresada();