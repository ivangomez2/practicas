
const fs = require("fs");

function getAll() {
   
    const recibeJson = fs.readFileSync("pelis.json");
    

   const data = JSON.parse(recibeJson.toString());
   console.log (data);
   return data;
};
getAll();

function dataFilter(texto,data) {
    const filtrito = data.filter(function (item) {
     const tagueada = item.tags.includes(texto);
     if (tagueada == true) {
         return item;
         console.log (tagueada)
     }
    });
  return filtrito;
}

function sorteo(texto,data) {
 const sortt = data.sort(function(a,b) {
 if (a.texto > b.texto) {
     return 1;
     
 }     
 if (b.texto < b.texto)
 return -1
 })    
 return 0
}



exports.invocadora = function (params) {
    var invocar = getAll();

if (params.search) {
    console.log("funciona",params.search);
    invocar = dataFilter(params.search,invocar);
}else {
    console.log("no hay nada")
};

if (params.sort) {
console.log ("funca",params.sort);
invocar= sorteo(params.sort,invocar);    
}else {
    console.log("no hay sorteo");
};

if ("no-format" in params) {
    invocar =JSON.stringify(invocar)
    
}
return invocar
}