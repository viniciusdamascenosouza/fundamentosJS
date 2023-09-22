const clientes = require("./clientes.json");

function encontraCliente(lista, chave, valor) {
  return lista.find((item) => item[chave].includes(valor));
}

const busca01 = encontraCliente(clientes, "nome", "Oralle");
const busca02 = encontraCliente(clientes, "telefone", "4733865848");

console.log(busca02);
// console.log(encontraCliente(clientes, "nome", "Oralle"));
