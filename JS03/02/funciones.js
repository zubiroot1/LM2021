function mostrarFrase() {
    var frase = document.getElementById("frase").value;
    var num = document.getElementById("num").value;

    var texto = "";
    for (let i = 0; i < num; i++) {
        texto = texto + (i + 1) + ". " + frase + "<br/>";

    }
    document.getElementById("resultadoFrase").innerHTML = texto;
}