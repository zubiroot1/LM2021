function calcula() {
    var precio =  document.getElementById("precio").value;
    var iva = document.getElementById("iva").value;
    var final = eval(precio) + eval((precio * (iva/100)));
    document.getElementById("total").innerHTML = "El precio final son " + final + " euros";
}