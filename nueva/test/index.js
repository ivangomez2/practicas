// todas las funciones se deben resolver en una linea de código (máximo 2)

function crearArrayDeObjetos(arrayDeNumeros, nombreDePropiedad) {
    // si recibe [1,2,3,4] y "a"
    // debe devolver
    // [{ a:1 }, { a:2 }, { a:3 }, { a:4 }]
    // usar método map
  return arrayDeNumeros.map(function (numeros) {
      return {a:numeros}
      
  })
  console.log (arrayDeNumeros)
  }
  function filtrarPor(arrayDeObjetos, nombreDePropiedad, primeraLetra) {
    // si recibe [{ a: 100, unTexto: "hola" }, { a: 34, unTexto: "chau" }]
    // y "unTexto" como nombreDePropiedad
    // y "c" como primeraLetra
    // debe devolver
    // [{ a: 34, unTexto: "chau" }]
    // usar método filter
  return arrayDeObjetos.filter(function (cosas) {
      return nombreDePropiedad.charAt(0);

      
  })
  
  
  function buscarPorProp(arrayDeObjetos, nombreDePropiedad, valorABuscar) {
    // si recibe [{ a: 100, unTexto: "hola" }, { a: 34, unTexto: "chau" }]
    // y "unTexto" como nombreDePropiedad
    // y "chau" como valorABuscar
    // debe devolver
    // { a: 34, unTexto: "chau" }
    // usar método find
    return arrayDeObjetos.find(function (prop) {
        return prop[nombreDePropiedad] == valorABuscar
        
    })
}
  
  function ordenarPor(arrayDeObjetos, nombreDePropiedad) {
    // si recibe [{ a: 100, unTexto: "hola" }, { a: 34, unTexto: "chau" }]
    // y "a" como nombreDePropiedad
    // debe devolver
    // [{ a: 34, unTexto: "chau" }, { a: 100, unTexto: "hola" }]
    // usar un el método sort 
       return arrayDeObjetos.sort(function (a,b) {
     if (a[a] > a[b]) {
         return 1
         
     };
     if (a[a] < a[b]) {
         return -1
         
     };
     return 0
 
 
  // no modificar el test
  function testMetodos() {
    const arrayDeNumeros = [97, 78, 23, 12, 66];
    const arrayDeObjetos = crearArrayDeObjetos(arrayDeNumeros, "a");
    if (
      arrayDeObjetos[0].a == arrayDeNumeros[0] &&
      arrayDeObjetos[1].a == arrayDeNumeros[1] &&
      arrayDeObjetos[2].a == arrayDeNumeros[2] &&
      arrayDeObjetos[3].a == arrayDeNumeros[3] &&
      arrayDeObjetos[4].a == arrayDeNumeros[4]
    ) {
      console.log("crearArrayDeObjetos passed");
    } else {
      throw "crearArrayDeObjetos not passed";
    }
  
    // ######################################################
  
    arrayDeObjetos[0].texto = "ah re";
    arrayDeObjetos[1].texto = "ah re";
    arrayDeObjetos[2].texto = "ah re";
    arrayDeObjetos[3].texto = "vamo a codear";
    arrayDeObjetos[4].texto = "vamo a codear";
  
    const filtrado = filtrarPor(arrayDeObjetos, "texto", "a");
  
    if (
      filtrado[0].texto == "ah re" &&
      filtrado[1].texto == "ah re" &&
      filtrado[2].texto == "ah re"
    ) {
      console.log("filtrarPor passed");
    } else {
      throw "filtrarPor not passed";
    }
  
    // ######################################################
  
    const encontrado = buscarPorProp(arrayDeObjetos, "a", 97);
  
    if (typeof encontrado.texto == "string" && encontrado.a == 97) {
      console.log("buscarPorProp passed");
    } else {
      throw "buscarPorProp not passed";
    }
    // ######################################################
  
    const sortedByA = ordenarPor(arrayDeObjetos, "a");
    if (
      sortedByA[0].a == 12 &&
      sortedByA[1].a == 23 &&
      sortedByA[2].a == 66 &&
      sortedByA[3].a == 78 &&
      sortedByA[4].a == 97
    ) {
      console.log("ordenarPor passed");
    } else {
      throw "ordenarPor not passed";
    }
  }
  
  function main() {
    testMetodos();
  }
  
  main();