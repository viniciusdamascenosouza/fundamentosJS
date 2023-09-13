const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunoseMedias = [alunos, medias];

function exibeNomeAluno(aluno) {
  if (listaDeAlunoseMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunoseMedias[0]
    // const medias = listaDeAlunoseMedias[1]
    const [alunos, medias] = listaDeAlunoseMedias;

    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];

    console.log(
      `${aluno} está cadastrado, sua média é: ${mediaAluno}.`
    );
  } else {
    console.log(`${aluno} não foi encontrado!`);
  }
}

exibeNomeAluno("João");
