const cliente = {
  nome: "Júlio",
  idade: 29,
  cpf: "1122223344",
  email: "julin@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]}, ${cliente["nome"]} tem ${
    cliente["idade"]
  } anos, seu email é ${
    cliente["email"]
  } e os três primeiros digitos do seu cpf são: ${cliente["cpf"].substring(
    0,
    3
  )}.`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`);
});

// atividade
const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};

const dadosPet = ["nome", "dataDeNascimento", "brinquedoFavorito", "cor"];

dadosPet.forEach((dado) => {
    console.log(
        `O dado ${dado} tem o valor: ${pet[dado]}`
        )
})