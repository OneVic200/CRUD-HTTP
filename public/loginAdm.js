function fazerLogin() {
    const adm = document.getElementById('adm').value;
    const senha = document.getElementById('senha').value;

    if (adm === "VASB" & senha === "190904") {
        window.location.href = "registros.html";
    } else {
        alert("Administrador não reconhecido")
    }
}