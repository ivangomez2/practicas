
//este modulo (index) tiene como proposito 
//recibir el input por parte del usuario
//entenderlo y delegar la responsabilidad
//de la operacion matematica a quien correspnda

const operaciones = require("./operaciones");

function parsearTerminos(texto) {
  
  return {
    primerTermino: 12,
    segundoTermino: 90,
    operacion: "+",
};    
}

function ejecutarOperacion (objetoOperaciones) {
 const mapa = {
    "+": operaciones.sumar,
    "-": operaciones.restar,
    "/":operaciones.dividir,
    "*": operaciones.multiplicar,
 }
 const simbolo = objetoOperaciones.operacion;
 console.log (mapa,simbolo);
 const ejecutor = mapa[simbolo];
 return ejecutor(objetoOperaciones.primerTermino,
                  objetoOperaciones.segundoTermino)
};

function main() {
    const operacionParseada= parsearTerminos(process.argv[2])
    const resultado = ejecutarOperacion(operacionParseada);
    console.log (resultado);
  }

main();
