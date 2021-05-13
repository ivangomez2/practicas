const fs = require("fs");

function getLista() {
  const pelis = fs.readFileSync(__dirname + "/pelis.json");
  const arrayPelis = JSON.parse(pelis);
  return arrayPelis;
}

function filtrarTitulo(texto, arrayPelis) {
  const filtroDeTitulos = arrayPelis.filter(function (item) {
    const elTitulo = item.title.includes(texto);
    if (elTitulo == true) {
      return item;
     
    }
    console.log(elTitulo);
  });
  return filtroDeTitulos;
}
filtrarTitulo();
function filtrarTag(texto, arrayPelis) {
  const filtroDeTags = arrayPelis.filter(function (item) {
    const elTags = item.tags.includes(texto);
    if (elTags == true) {
      return item;
    }
  });
  return filtroDeTags;
}

function porOrden(texto, arrayPelis) {
  const orden = arrayPelis.sort(function (a, b) {
    if (a[texto] > b[texto]) {
      return 1;
    }
    if (a[texto] < b[texto]) {
      return -1;
    }
    return 0;
  });
  return orden;
}

exports.combinar = function (parameters) {
  var invocar = getLista();
  if (parameters.search) {
    invocar = filtrarTitulo(parameters.search, invocar);
  }
  if (parameters.tags) {
    invocar = filtrarTag(parameters.tags, invocar);
  }
  if (parameters.sort) {
    invocar = porOrden(parameters.sort, invocar);
  }
  if ("no-format" in parameters) {
    invocar = JSON.stringify(invocar);
  }
  return invocar;
};
