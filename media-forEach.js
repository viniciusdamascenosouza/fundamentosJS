const notasJulio = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notasJulio.forEach(function (notasJulio, indice) {
  somaDasNotas += notasJulio;
  console.log(indice)
});

const media = somaDasNotas / notasJulio.length;

console.log(`As notas do aluno Julio são: ${notasJulio}, atingindo uma média de ${media} pontos.`)
