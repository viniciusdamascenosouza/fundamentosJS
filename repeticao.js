const vendedor = {
  nome: "Josué",
  idade: "35",
  telefone: "12221111",
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

for (let chave in vendedor) {
  let tipo = typeof vendedor[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor: ${vendedor[chave]}.`);
  }
}
