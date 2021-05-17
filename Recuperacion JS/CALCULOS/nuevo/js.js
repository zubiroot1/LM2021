var sumapositivos = 0;
var sumanegativos = 0;
var numeromayor = 0;
var numeromenor = 0;

function comprobar() {
var numero = document.getElementById("numero").value;
if (numero > 0 ) { sumapositivos = eval(sumapositivos) + eval(numero);
}else {
sumanegativos = eval(sumanegativos) - eval(numero)
}
if (numero >= sumapositivos) { numeromayor = eval(numeromayor) + eval(sumapositivos)
}
if (numero <= sumanegativos) { numeromenor = eval(numeromenor) - eval(sumanegativos);
}
document.getElementById("resultado").innerHTML += "Mayor número introducido; " + numeromayor + "<br/>";
document.getElementById("resultado").innerHTML += "Menor número introducido: " + numeromenor + "<br/>";
document.getElementById("resultado").innerHTML += "Suma de positivos: " + sumapositivos + "<br/>";
document.getElementById("resultado").innerHTML += "Suma de negativos: " + sumanegativos + "<br/>";