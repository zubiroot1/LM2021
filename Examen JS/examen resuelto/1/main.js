function validarFormulario() {
    var cadenaError = "";

    var str = document.getElementById("email").value;
    var x = str.indexOf("@")
    var y = str.indexOf(".")
    var email = document.getElementById("email");
    if (email.value == null || email.value.length == 0) {
        cadenaError = "<li>Error email: campo vacío</li>";
    } else if (x == -1 || y == -1) {
        cadenaError = "<li>Error email: Email no válido";
    }
    var str2 = document.getElementById("web").value
    var z = str2.indexOf("http://")
    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0) {
        cadenaError = cadenaError + "<li>Error web: campo vacío</li>";
    } else if (z != 0) {
        cadenaError = cadenaError + "<li>Error web: web no válida </li>";
    }

    var edad = document.getElementById("edad");
    if (edad.value == null || edad.value.length == 0) {
        cadenaError = cadenaError + "<li>Error edad: campo vacío </li>";
    } else if (edad.value < 1) {
        cadenaError = cadenaError + "<li>Error edad: Edad no válida </li>";
    }

    var pass = document.getElementById("pass");
    if (pass.value == null || pass.value.length == 0) {
        cadenaError = cadenaError + "<li>Error Contraseña: campo vacío</li>";
    } 

    var rpass = document.getElementById("rpass");
    if (rpass.value == null || rpass.value.length ==0) {
        cadenaError = cadenaError + "<li>Error Repetir Contraseña: campo vacío</li>";
    } else if (rpass.value != pass.value) {
        cadenaError = cadenaError + "<li>Error: Las contraseñas no coinciden</li>";
    }

    if (cadenaError.length == 0) {
        return true;
    } else {
        mostrarError(cadenaError);
        return false;
    }

}

function mostrarError(cadenaError) {
    document.getElementById("errores").innerHTML = cadenaError;
    document.getElementById("capaerrores").style.visibility = "visible";
}

