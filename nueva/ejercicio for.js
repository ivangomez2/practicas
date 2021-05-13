var numeros = 10;
const lista = [];
while (numeros < 90) {
    const numerosRandom = Math.random();
    const resultado = numerosRandom * 80 + 10 ;
    const nuevo = Math.floor(resultado);
    console.log (nuevo);
    lista.push (nuevo);
   numeros++;


};

var pares = 0;
var impares = 0;

for (let index = 0; index < lista.length; index++) {
    const resultado = lista[index];
    const par = (resultado % 2)== 0;
    console.log (par);
}

if (pares) {
    pares++
    console.log ("pares");
    
}
else { 
    impares++
    console.log ("impar")}