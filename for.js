const numeros = [100, 200, 300, 400, 500, 600];


// **indice pode ser escrito: indice + 1 ou indice += 1 ou indice ++

// PRIMEIRA EXPRESSÃO: é executada apenas uma única vez;
// SEGUNDA EXPRESSÃO: condição de execução do bloco;
// TERCEIRAEXPRESSÃO: é executada sempre no final do bloco
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}