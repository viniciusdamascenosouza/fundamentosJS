const clientes = require("./clientes.json");

function ordenaClientes(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  return resultado;
}

const ordenadoPorNome = ordenaClientes(clientes, "nome");

console.log(ordenadoPorNome);
