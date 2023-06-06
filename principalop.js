let cuentas = [
    { usuario: "Mali", saldo:200, password: "Holamun" },
    { usuario: "Gera", saldo:290, password: "123" },
    { usuario: "Maui", saldo:67,password: "1234" }
  ];


  function consultarSaldo() {
    var saldoActual = obtenerSaldo();
    alert("Saldo actual: $" + saldoActual.toFixed(2));
  }