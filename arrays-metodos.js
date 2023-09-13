// .concat()
// Este método concatena dois arrays, não altera os originais e resulta em um novo array concatenado
// const alunos = ["Luan", "João", "Marcos", "Estevão", "Lucas"];

// const alunas = ["Luara", "Stefanie", "Marcela", "Maria"];

// const alunosGeral = alunos.concat(alunas);

// console.log(alunosGeral);

// ----------------------------------------------------------------------------------------------


// filter()
// Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
// Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

// const alunos = ["Luan", "João", "Marcos", "Estevão", "Lucas"];

// const alunosComNomesPequenos = alunos.filter((aluno) => aluno.length <= 6);

// console.log(alunosComNomesPequenos);

const DDDs = [32, 31, 43, 35, 24, 78, 38];

const DDDsMG = DDDs.filter((ddd) => ddd >= 31);

console.log(DDDsMG)