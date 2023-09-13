const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunoseMedias = [alunos, medias];

function exibeNomeAluno(aluno) {
  if (listaDeAlunoseMedias[0].includes(aluno)) {
    const indice = listaDeAlunoseMedias[0].indexOf(aluno);
    const mediaAluno = listaDeAlunoseMedias[1][indice];

    console.log(
      `O aluno ${aluno} está cadastrado, sua média é: ${mediaAluno}.`
    );
  } else {
    console.log(`O aluno ${aluno} não foi encontrado!`);
  }
}

exibeNomeAluno("João");
