let cuentas = [
  { usuario: "Mali", saldo: 200, password: "Holamun" },
  { usuario: "Gera", saldo: 290, password: "123" },
  { usuario: "Maui", saldo: 67, password: "1234" }
];

let usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
console.log(usuarioActual.usuario)

function obtenerSaldo(usuario) {
  for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].usuario === usuario) {
      return cuentas[i].saldo;
    }
  }
  return 0;
}

function consultarSaldo() {
  let cuentaDeseada = usuarioActual.usuario;
  let saldoActual = obtenerSaldo(cuentaDeseada);
  alert(`El saldo actual de la cuenta es, ${saldoActual}`);
}

function obtenerUsuario(usuario) {
  for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].usuario === usuario) {
      return cuentas[i];
    }
  }
  return null;
}

function realizarIngreso() {
  let IngresarS = prompt("¿Cuanto quieres ingresar?")
  IngresarS = parseInt(IngresarS)
  let cuentaDeseada = usuarioActual.usuario;
  let total = obtenerSaldo(cuentaDeseada) + IngresarS
  alert(`Ingreso exitoso, tu nuevo saldo es, ${total}`);
}



function realizarRetiro() {
  let SacarS = prompt("¿Cuanto quieres sacar?")
  SacarS = parseInt(SacarS)
  let cuentaDeseada = usuarioActual.usuario;
  let totalRet = obtenerSaldo(cuentaDeseada) - SacarS
  alert(`Retiro exitoso, tu nuevo saldo es, ${totalRet}`);
}


