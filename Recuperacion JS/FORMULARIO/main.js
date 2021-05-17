function validarFormulario() {
    var cadenaError = "";

    var str = document.getElementById("login").value;
    
    var login = document.getElementById("login");
    if (login.value == null || login.value.length == 0) {
        cadenaError = "<li>Error login: campo vacío</li>";
    } else if (login.value.length < 5) {
        cadenaError = "<li>Error login: Nombre no válido";
    }
    var tel = document.getElementById("telefono");
    if (tel.value == null || tel.value.length == 0) {
        cadenaError = cadenaError + "<li>Error Teléfono: campo vacío</li>";
    } else if (tel.value.length != 9) {
        cadenaError = cadenaError + "<li>Error Teléfono: 9 cifras</li>";
    } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
        cadenaError = cadenaError + "<li>Error Teléfono: 9 o 6 primera cifra</li>";
    }

    var str3 = document.getElementById("email").value
    var email = document.getElementById("email");
    if (email.value == null || email.value.length == 0) {
        cadenaError = cadenaError + "<li>Error email: campo vacío</li>";
    } else if (!str3.includes("@") || !str3.endsWith(".es",)) {
        cadenaError = cadenaError + "<li>Error email: email no válido </li>";
    }

    var str2 = document.getElementById("web").value
    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0) {
        cadenaError = cadenaError + "<li>Error web: campo vacío</li>";
    } else if (!str2.startsWith("www") || !str2.endsWith(".es")) {
        cadenaError = cadenaError + "<li>Error web: web no válida </li>";
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
