const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
meuSet.add("Vinícius", "Vinícius");
const nomesAtualizados = [...meuSet];

// tudo isso poderia ser subtituido por:
// const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados);
