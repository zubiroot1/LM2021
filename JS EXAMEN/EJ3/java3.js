function calcula() {
    var precio = document.getElementById("precio").value;
    var km = document.getElementById("km").value;
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var final = eval(precio) * eval(km);
    document.getElementById("total").innerHTML = "El viaje de " + origen + " - " + destino + " de " + km + "kilometros a " + precio + " el precio del kilometro hace un gasto de " + final + " euros.";
}
