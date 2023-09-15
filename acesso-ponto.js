const cliente = {
  nome: "Júlio",
  idade: 29,
  cpf: "1122223344",
  email: "julin@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente.nome}, ${cliente.nome} tem ${
    cliente.idade
  } anos, seu email é ${
    cliente.email
  } e os três primeiros digitos do seu cpf são: ${cliente.cpf.substring(0, 3)}`
);
