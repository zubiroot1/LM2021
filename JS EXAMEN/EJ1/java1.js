function validarFormulario() {
    var cadenaError = "";

    var str = document.getElementById("nombre").value;

    var nombre = document.getElementById("nombre");
    if (nombre.value == null || nombre.value.length == 0) {
        cadenaError = "<li>Error nombre y apellidos: campo vacio</li>";
    } else if (nombre.value.length < 5) {
        cadenaError = "<li>Error nombre: Nombre muy corto";
    }
    else if (nombre.value.length > 30) {
        cadenaError = "<li>Error nombre: Nombre muy largo";
    }

    var str3 = document.getElementById("email").value
    var email = document.getElementById("email");
    if (email.value == null || email.value.length == 0) {
        cadenaError = cadenaError + "<li>Error email: campo vacio</li>";
    } else if  (!str3.endsWith("@iestriana.com",)) {
        cadenaError = cadenaError + "<li>Error email: email no valido </li>";
    }

    var str2 = document.getElementById("web").value
    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0) {
        cadenaError = cadenaError + "<li>Error web: campo vacio</li>";
    } else if (!str2.startsWith("https://")) {
        cadenaError = cadenaError + "<li>Error web: web no valida </li>";
    }

    var str4 = document.getElementById("edad").value
    var edad = document.getElementById("edad");
    if (edad.value == null || edad.value.length == 0) {
        cadenaError = cadenaError + "<li>Error en la edad: campo vacio</li>";
    } else if (edad.value < 18 ) {
        cadenaError = cadenaError + "<li>Error en la edad: es menor</li>";
    }
    else if (edad.value > 100 ) {
        cadenaError = cadenaError + "<li>Error en la edad: es muy mayor </li>";
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

