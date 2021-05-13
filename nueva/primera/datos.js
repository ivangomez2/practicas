const fs = require("fs");

function allData() {
    const archivo = fs.readFileSync ('datos.json')
    
    return JSON.parse(archivo);
}
 


exports.getAll= function(item){
     const datoa = allData();
     return datoa
}

exports.getOlderThan = function (number) {
   
    };