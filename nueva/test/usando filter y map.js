// 🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
// Completar acá.
// Escribir la función soloObjetosConNombreYApellido()
// y pasar el test.
function soloObjetosConNombreYApellido(coll) {     // 1- asignamos un valor (random)
  const resultado = coll.filter(function(items) {   // usamos ese valor () para .filter y creamos una function (con otro random)
    const onlyNames = items.nombre;                 //dentro pegamos lo que queremos buscar de ese array (utilizando el random . ese valor)
    const onlySurname = items.apellido;

    return onlyNames && onlySurname;                //devolvemos ambas const
    
  })
  return resultado;                                //devolver el array "resultado" para pasar test

} 

// Escribir la función soloLosNombres()
function soloLosNombres(collection) {
  const nameTag = collection.map(function(item) {
    const soloNombbres= item.nombre
    return item.nombre
  })
   const nuevosNombres =nameTag.map(function (nombre) {
     return nombre.charAt(0).toUpperCase() + nombre.slice (1);
    })
    return nuevosNombres; // PASAR A MAYUSCULA 
  } 
  
// y pasar el test.

// Tests. No modificar!
function testSoloObjetosConNombreYApellido() {
  const datosDePrueba = [
    { a: 1 },
    { nombre: true },
    { nombre: "Paula", apellido: "Gil" },
    { nombre: "Marce", apellido: "Zapaia" },
  ];
  const respuesta = soloObjetosConNombreYApellido(datosDePrueba);
  const hasPau = respuesta.find((r) => r.nombre == "Paula");
  const hasMarce = respuesta.find((r) => r.nombre == "Marce");

  if (respuesta.length == 2 && hasMarce && hasPau) {
    console.log("testSoloObjetosConNombreYApellido passed");
  } else {
    throw "testSoloObjetosConNombreYApellido failed";
  }
}

function testSoloLosNombres() {
  const datosDePrueba = [{ nombre: "paula" }, { nombre: "dana" }];

  const respuesta = soloLosNombres(datosDePrueba);

  if (respuesta.includes("Paula") && respuesta.includes("Dana")) {
    console.log("testSoloLosNombres passed");
  } else {
    throw "testSoloLosNombres failed";
  }
}

function main() {
  testSoloObjetosConNombreYApellido();
  testSoloLosNombres();
}

main();