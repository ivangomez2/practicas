const productos =[
    { id: 1, nombre: "producto 1", stock: 12},
    { id: 2, nombre: "producto 2", stock: 11},
    { id: 3, nombre: "producto 3", stock: 1},
    { id: 4, nombre: "producto 4", stock: 163},
    ];
//


exports.getOne = function (id) {
    const resultado = productos.find(function (item) {
        const elegido = item.id == id;
        return elegido
        
    })  
    console.log(resultado);  
    }

exports.getAll = function (todos) {
 const resultado = productos
 return resultado    
 console.log (resultado);
}

exports.getAllWhit = function (minStock) {
    const resultado = productos.filter(function (item) {
        const nueva = item.stock <= minStock;
        return nueva;
        console.log(nueva);
    
    })
    return resultado;
}

exports.Ordenamiento = function (ordenado) {
const resultado = productos.sort(function (a,b) {
 if (a.stock > b.stock) {
     return 1
     if (a.stock < b.stock) {
         return -1
         
     }
     return 0;
 }
    console.log (resultado);
})    
}
