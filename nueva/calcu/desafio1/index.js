const { mainModule } = require("node:process");
const pelis =  require("./pelis.js");

function laparseadora(argv) {
 const envio = {}
 
 argv.forEach(function (item, ind) {
  if(item.startsWhith("--")){
    console.log (item)
     console.log (ind) 
    
    const sinGuion = item.slice(2);
    envio[sinGuion] = 1;
     
    }
  return item;
 })
}

function main() {
    const comandos = laparseadora.argv(process.argv);
    invocadora.searchByCriteria(comandos);

}
main();