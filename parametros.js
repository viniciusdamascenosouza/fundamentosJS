// Utilizamos os parametros para reutilizar melhor as funções.
// abaixo mostro como fariamos sem utilizar os parametros

function soma() {
  return 2 + 2;
}

function somaOutroNumero() {
  return 50 + 2;
}

console.log(soma());

// Aqui mostro como utilizar como parametros, uma função simples, que pode ser reutilizada para outras somas
// Dessa forma podemos fazer qualquer soma de dois números, mudando apenas os números que serão somados
// quando chamar a função

function somaCorreta(numero1, numero2) {
  return numero1 + numero2;
}

console.log(somaCorreta(10, 20));
console.log(somaCorreta(5368, 1092));
console.log(somaCorreta(898, 12901));

function apresentacao(nome, idade, cidade) {
  return `Meu nome é ${nome}, tenho ${idade} anos de idade e moro na cidade de ${cidade}.`;
}

console.log(apresentacao("Vinícius Damasceno", 20, "Contagem"));
