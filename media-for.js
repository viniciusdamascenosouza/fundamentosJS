const notasJulio = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notasJulio.length; i++) {
    somaDasNotas += notasJulio[i];
}

const media = somaDasNotas / notasJulio.length;

console.log(`A média das notas do aluno Julio é: ${media}`);