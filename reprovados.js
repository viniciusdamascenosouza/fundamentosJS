const alunos = ["Ana", "Marcos", "João", "Murilo"];

const medias = [7, 4.5, 9.5, 8];

// quando não estamos um parametros, mas usamos o segundo normalmente, mudamos o primeiro para um: "_"
const reprovados = alunos.filter((_, i) => {
  return medias[i] < 7;
});

console.log(reprovados);
