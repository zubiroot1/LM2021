function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var dias = edad * 365;
    document.getElementById("resultado").innerHTML = nombre + " tiene " + edad + " a�os y en d�as son " + dias;
}

function calcularMayor() {
    
}