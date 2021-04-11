window.onload = function () {
    //creo un window.onload para que pida el numero
    numero = prompt("Introduce un numero: ");
    document.write("<table border='1'><tr><td>Numero</td><td>Resultado</td></tr>");
    //pedimos el numero y creamos una tabla con borde 1 y los titulos de las columnas
    for (i = 0; i <= 10; i++) {
        document.write("<tr><td>" + numero + " x " + i + "</td><td>" + numero * i + "</td></tr>");
        //la funcion de arriba para que multiplique hasta por 10 y vaya poniendo el numero y al lado el resultado
    }
    document.write("</table>");
}