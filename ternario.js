const idadeMinima = 18;
const idadeCliente1 = 18;

if (idadeCliente1 >= idadeMinima) {
  console.log("O cliente pode consumir bebida alcoólica!");
} else {
  console.log("O cliente é de menor, não pode consumir bebida alcoólica!");
}

console.log(idadeCliente1 >= idadeMinima ? maior() : menor());
