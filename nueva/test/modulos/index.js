const p = require("./products.js")

function main() {
    const resultado = p.getOne(2);
    console.log (resultado);

    const resultadoDos = p.getAll();
    console.log (resultadoDos);

    const stock = p.getAllWhit(14);
    console.log (stock);

    const ordenada = p.ordenamiento(stock);
    console.log (ordenada)
}

main();