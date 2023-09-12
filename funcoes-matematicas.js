// Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
// abaixo de 0.5 arredonda para baixo
// igual ou acima de 0.5 arredonda para cima
function calculo1() {
  return Math.round(4.3);
}

// Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
function calculo2() {
  return Math.ceil(6.1);
}

// Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
function calculo3() {
  return Math.floor(9.9);
}

// Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
function calculo4() {
  return Math.trunc(10.1);
}

// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3).
// Recomenda-se usar a multiplicação por ser mais rápido.
function calculo5() {
  return Math.pow(2, 5);
}

// Math.sqrt() : Retorna a raiz quadrada de um número.
function calculo6() {
  return Math.sqrt(81);
}

// Math.min(): Retorna o menor valor entre os argumentos.
function calculo7() {
  return Math.min(10, 20, 30, 40, 1, -12, 580);
}

// Math.max(): Retorna o maior valor entre os argumentos.
function calculo8() {
  return Math.max(10, 20, 30, 40, 1, -12, 580);
}

// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1,
// então não teremos um valor esperado para receber.
function calculoRandom() {
  return Math.random();
}

console.log(calculoRandom());
