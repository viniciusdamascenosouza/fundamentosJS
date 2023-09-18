const vendedor = {
  nome: "Josué",
  idade: "35",
  telefone: ["12221111", "999999099"],
  email: "jusuedasvendas@dominio.com",
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
        let saldoRestante = valor - this.saldo;
      console.log(`O saldo é insuficiente! É necessário mais ${saldoRestante} de saldo`);
    } else {
      let saldoAtualizado = this.saldo -= valor;
      console.log(`Compra realizada! Seu saldo agora é: ${saldoAtualizado}`);
    }
  },
};

vendedor.efetuaPagamento(100);
