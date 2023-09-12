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
    return 2 + 2;
}

console.log(soma());
