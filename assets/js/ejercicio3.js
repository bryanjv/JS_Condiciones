function verificarPassword() {
    const digito1 = document.getElementById("digito1").value;
    const digito2 = document.getElementById("digito2").value;
    const digito3 = document.getElementById("digito3").value;
    const password = `${digito1}${digito2}${digito3}`;

    if (password === "911") {
        document.getElementById("resultado").textContent = "Password 1 correcto";
    } else if (password === "714") {
        document.getElementById("resultado").textContent = "Password 2 correcto";
    } else {
        document.getElementById("resultado").textContent = "Password incorrecto";
    }
}
