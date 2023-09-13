// Adicionando elementos com .push()
// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
// dentros dos parenteses vão os elementos que serão adicionados a partir do último índice
const notas = [10, 6, 8];

notas.push(5, 22, 332);

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
