function validarFormulario() {
    var cadenaError = "";

    var str = document.getElementById("login").value
    var w = str.length;
    if (login.value == null || campo.value.length == 0) {
        cadenaError = cadenaError + "<li>Error nombre: campo de nombre vac�o</li>";
}


    var str1 = document.getElementById("web").value
    var x = str1.indexOf("http://")
    var y = str1.endsWith(".es")
    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0) {
        cadenaError = cadenaError + "<li>Error web: campo vac�o</li>";
    } else if (x != 0) {
        cadenaError = cadenaError + "<li>Error web: web no v�lida </li>";
    } else if (y != 0) {
            cadenaError = cadenaError + "<li>Error web: web no v�lida </li>";
        }

        var str2 = document.getElementById("telefono");
        if (str2.value == null || str2.value.length == 0) {
            cadenaError = cadenaError + "<li>Error Tel�fono: campo vac�o</li>";
        } else if (str2.value.length != 9) {
            cadenaError = cadenaError + "<li>Error Tel�fono: 9 cifras</li>";
        } else if (!str2.value.startsWith(9) && !str2.value.startsWith(6)) {
            cadenaError = cadenaError + "<li>Error Tel�fono: 9 o 6 primera cifra</li>";
        }

        if (cadenaError.length == 0) {
            return true;
        } else {
            mostrarError(cadenaError);
            return false;
        }


    function mostrarError(cadenaError) {
        document.getElementById("errores").innerHTML = cadenaError;
        document.getElementById("capaerrores").style.visibility = "visible";
    }
