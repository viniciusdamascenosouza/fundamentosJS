const vendedor = {
  nome: "Josué",
  idade: "35",
  telefone: ["122211", "9089999990"],
  email: "jusuedasvendas@dominio.com",
};

vendedor.enderecos = [
  {
    rua: "Ibituruva",
    bairro: "Amazonas",
    numero: "221",
    complemento: "Apartamento 9",
    apartamento: true,
  },
];

const chavesDoObjeto = Object.keys(vendedor);
// console.log(chavesDoObjeto);

// if (!chavesDoObjeto.includes("endereco")) {
//   console.error("Erro! É necessário ter um endereço cadastrado.");
// }

// function ligaParaCliente(telefoneComercial, telefoneResidencial) {
//   console.log(`Ligando para ${telefoneComercial}`);
//   console.log(`Ligando para ${telefoneResidencial}`);
// }

// ligaParaCliente(vendedor.telefone[0], vendedor.telefone[1]);
// LINHA ACIMA PODERIA SER ESCRITA DA FORMA ABAIXO
// ligaParaCliente(...vendedor.telefone);

const encomenda = {
  destinatario: vendedor.nome,
  rua: vendedor.enderecos[0].rua,
  bairro: vendedor.enderecos[0].bairro,
  numero: vendedor.enderecos[0].numero,
  complemento: vendedor.enderecos[0].complemento,
  apartamento: vendedor.enderecos[0].apartamento,
};

// O Objeto acima deve ser subtituido pelo código abaixo

const encomendaCerta = {
  destinatario: vendedor.nome,
  ...vendedor.enderecos[0],
};

console.log(encomendaCerta);
