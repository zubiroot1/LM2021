function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var dias = edad * 365;

    document.getElementById("resultado").innerHTML = nombre 
            + " tiene " + edad + " años y en días son " + dias;
}

function calcularMayor() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var mensaje = "";
    if (num1 > num2) {
        mensaje = num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        mensaje = num2 + " es mayor que " + num1;
    } else {
        mensaje = num1 + " es igual que " + num2;
    }
    document.getElementById("resultadoMayor").innerHTML = mensaje;
}