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

const chavesDoObjeto = Object.keys(vendedor);
// console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("endereco")){
    console.error("Erro! É necessário ter um endereço cadastrado.")
}
