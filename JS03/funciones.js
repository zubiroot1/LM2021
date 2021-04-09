function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var dias = edad * 365;
    document.getElementById("resultado").innerHTML = nombre + " tiene " + edad + " años y en días son " + dias;
}

function calcularMayor() {
    
}