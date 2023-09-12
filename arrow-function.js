// FUNÇÃO DECLARADA
function apresentar(nome) {
  return `Meu nome é ${nome}`;
}
// ARROW FUNCTION
const apresentarArrow = (nome) => `Meu nome é ${nome}!`;
const soma = (num1, num2) => num1 + num2;

// console.log(soma(78, 22))

// arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if (num1 >= 10 || num2 >= 10) {
    return "Somente números de 1 a 9";
  } else {
    return num1 + num2;
  }
};

console.log(somaNumerosPequenos(1, 2));

// Hoisting: arrow function se comporta como expressão 

// **operador maior ou igual é: >=
