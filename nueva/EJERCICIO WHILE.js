var contador = 0;

while (contador < 130) {
 contador ++;
 var aleatoriedad = Math.random(1);
 console.log (aleatoriedad);
 console.table (contador);   
}
console.log("termino");

console.table (contador);

//iterar (o sea, repetir) 130 veces y crear un array con 130 posiciones con números aleatorios. Además,
// deben imprimir el array en la terminal usando console.table.