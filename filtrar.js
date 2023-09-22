const clientes = require("./clientes.json");

function filtraApSemComplemento(lista) {
  return lista.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const clientesComApSemComplemento = filtraApSemComplemento(clientes);

console.log(clientesComApSemComplemento);
