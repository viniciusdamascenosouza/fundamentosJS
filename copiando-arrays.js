const notas = [7, 7, 8, 9];

// ... = Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". 
// Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que 
// estamos indicando. É como se copiássemos o conteúdo da lista, "7, 7, 8, 9", e colássemos no lugar do [...notas]. 
// É isso que estamos dizendo para o JavaScript.
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são: ${novasNotas}`);
console.log(`As novas notas são: ${notas}`);
