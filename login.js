function loguear() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    // Verificar si la contraseña tiene al menos 10 caracteres y permite caracteres especiales
    if (pass.length >= 10 && /^[a-zA-Z0-9@!#$%^&*()_+\[\]{};':"\\|,.<>\/?~-]+$/.test(pass)) {
        if (user == "ana" && pass == "0703@.Hola") {
            window.location = "formulario3.html";
        } else {
            alert("Datos incorrectos");
        }
    } else {
        alert("La contraseña debe tener al menos 10 caracteres y puede incluir caracteres especiales.");
    }
}

function togglePassword() {
    var passwordField = document.getElementById("clave");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
