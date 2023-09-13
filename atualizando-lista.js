// Em uma lista, neste caso de desenvolvedores que trabalham em uma empresa, necessita-se de uma atualização.
// Removendo dois funcionários específicos, e adicionando um novo.
// o método splice modifica o array original
const desenvolvedoresAtuais = [
  "João",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Leo",
];

desenvolvedoresAtuais.splice(1, 2, "Rodrigo");

console.log(desenvolvedoresAtuais);
