let cuentas = [
    { usuario: "Mali", saldo:200, password: "Holamun" },
    { usuario: "Gera", saldo:290, password: "123" },
    { usuario: "Maui", saldo:67,password: "1234" }
  ];

  let formuIng = document.getElementById("formu");

  formuIng.addEventListener("submit", function(event) {
    event.preventDefault();

    let UsuarioI = document.getElementById("usuario").value;
    let ContraI = document.getElementById("password").value;

    let Ingreso = cuentas.find(
    
        function usuarioIngresado(user) {
        return user.usuario === UsuarioI && user.password === ContraI;
    });

    if (Ingreso) {
      alert(`Hola de nuevo, ${Ingreso.usuario}!`);
      window.location.href = "principal.html"
      
    } else {
      alert("Por favor, verifica tu usuario y contraseña.");
      
    }

    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
  });