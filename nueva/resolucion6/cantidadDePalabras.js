
// Escribir acá la función cuentaPalabras
function cuentaPalabras(texto) {
  const palabras = texto.split(" ");
  var counter = 0;
  // cantidad de palabras OK <-
 for (let i = 0; i < palabras.length; i++) {
   const palabra = palabras[i];
   if (palabra[0] == "a") {
     counter++;
     console.log (palabras.length);
     console.log (counter);
    
    }
 }

  return cantidadDePalabras = palabras.length,
   palabrasConA= counter; 

 };
 

// no modificar esta funcions
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
}

main();