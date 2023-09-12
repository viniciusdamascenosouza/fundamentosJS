// let x = "";
// console.log(x);
// x = "oi";
   
// DECLARAÇÃO DA FUNÇÃO
                       //string
function imprimeTexto (texto) {
    console.log(texto)
}

// EXECUTANDO A FUNÇÃO
imprimeTexto("Sou o texto que a função irá imprimir!");
imprimeTexto(soma());

// FUNÇÃO SEM PASSAR UM PARÂMETRO
function soma() {
    // O return pode ter outros códigos antes, mas o mesmo deve ser o último conteudo 
    // antes de fechar o bloco de códigos dentro de função
    return 2 + 2;
}

console.log(soma());
