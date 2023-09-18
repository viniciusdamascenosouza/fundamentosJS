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
  {
    rua: "Juruna",
    bairro: "Macedônia do Sul",
    numero: 867,
    complemento: "casa 2",
    apartamento: false,
  },
];

vendedor.enderecos.push({
  rua: "Manjuara",
  bairro: "Cruzeiro",
  numero: 721,
  complemento: "",
  apartamento: false,
});

// console.log(vendedor.enderecos);
// console.log(vendedor.enderecos[0]["rua"]);

const listaApenasApartamentos = vendedor.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
