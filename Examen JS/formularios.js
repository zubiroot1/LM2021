// formulario básico //

< !DOCTYPE html >
    <html lang="es">
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Validación Formularios</title>

                        <script src="main.js"></script>

</head>
                    <body>
                        <h1>FORMULARIO</h1>
                        <div style="width: 50%;float: left;">
                            <form action="" method="GET" name="nombreFormulario" onsubmit="return validarFormulario()">
                                <table>
                                    <tr>
                                        <td><label for="nombre">Nombre</label></td>
                                        <td><input type="text" name="nombre"
                                            id="nombre" placeholder="Nombre" autofocus onblur="validar(this)"></td>
                                            <td><span id="spnombre" style="color: red;"></span></td>
                </tr>
                                        <tr>
                                            <td><label for="postal">Cod. Postal</label></td>
                                            <td><input type="text" name="postal" id="postal"></td>
                </tr>
                                            <tr>
                                                <td><label for="edad">Edad</label></td>
                                                <td><input type="range" name="edad" id="edad" onchange="mostrarEdad(this)"></td>
                                                    <td><span id="spedad"></span></td>
                </tr>
                                                <tr>
                                                    <td><label for="telefono">Teléfono</label></td>
                                                    <td><input type="tel" name="telefono" id="telefono"></td>
                </tr>
                                                    <tr>
                                                        <td><input type="submit" value="Enviar"></td>
                </tr>
            </table>
        </form>
    </div>
                                            <div id="capaerrores" style="width: 50%;float: left;color: red;visibility: hidden;">
                                                <h3>Errores</h3>
                                                <span id="errores"></span>
                                            </div>
</body>
</html>




function validar(campo) {
    //var campo = document.getElementById("nombre");
    if (campo.value == null || campo.value.length == 0) {
                                    mostrarError(campo.id, "Error: Nombre vacío");
        //campo.style = "border-color: red";
        //campo.focus();
    } else {
                                    borrarError(campo.id);
        //campo.style = "border-color: none";
    }
}

function mostrarError(id, mensaje) {
                                    document.getElementById("sp" + id).innerHTML = mensaje;
}

function borrarError(id) {
                                    document.getElementById("sp" + id).innerHTML = "";
}

function validarFormulario() {
    var cadenaError = "";

    var nombre = document.getElementById("nombre");
    if (nombre.value == null || nombre.value.length == 0) {
                                    cadenaError = "<li>Error Nombre: campo vacío</li>";
    }

    var cp = document.getElementById("postal");
    if (cp.value == null || cp.value.length == 0) {
                                    cadenaError = cadenaError + "<li>Error Cód Postal: campo vacío</li>";
    } else if (cp.value.length != 5) {
                                    cadenaError = cadenaError + "<li>Error Cód Postal: 5 cifras</li>";
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

function mostrarEdad(campo) {
                                    document.getElementById("sp" + campo.id).innerHTML = campo.value;
}











// formulario con //