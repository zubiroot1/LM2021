// repetir frases X veces 

< !DOCTYPE html >

    <html lang="es">
        <head>
            <meta charset="utf-8" />
            <title></title>
            <script type="text/javascript" src="funciones.js"></script>
        </head>
        <body>
            <p>
                Pedir frase al usuario y un n�mero. Repetir en pantalla la frase
                tantas veces como indique el n�mero
            </p>
            <table>
                <tr>
                    <td><label for="frase">Frase</label> </td>
                    <td><input type="text" name="frase" id="frase"> </td>
                </tr>
                    <tr>
                        <td><label for="num">N�mero</label></td>
                        <td><input type="number" name="num" id="num"></td>
                    </tr>
                            <td colspan="2"><input type="button" value="Mostrar" onclick="mostrarFrase()"></td>
                    </tr>
            </table>
                        <div>
                            <span id="resultadoFrase"></span>
                    </div>
                
           </body>
    </html>




function mostrarFrase() {
    var frase = document.getElementById("frase").value;
    var num = document.getElementById("num").value;

    var texto = "";
    for (let i = 0; i < num; {
                texto = texto + (i + 1) + ". " + frase + "<br/>";

    }
    document.getElementById("resultadoFrase").innerHTML = texto;
}











// repetir frases X veces   //

function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var dias = edad * 365;

    document.getElementById("resultado").innerHTML = nombre
            + " tiene " + edad + " a�os y en d�as son " + dias;
}









//  Calcular numero mayor que otro


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








// calcular potencia



function calcularPotencia() {
    var base = document.getElementById("base").value;
    var exponente = document.getElementById("exponente").value;

    var potencia = Math.pow(base,exponente);

    document.getElementById("potencia").innerHTML = base + "^" + exponente + "=" + potencia;
}












// CALCULAR IMC


function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var imc = peso / Math.pow(altura, 2);
    var texto = "";

    if (imc < 18.5) {
            texto = "Peso insuficiente";
    } else if (imc >= 18.5 && imc <=24.9) {
            texto = "Normopeso";
    } else if (imc >= 25 && imc <= 26.9) {
            texto = "Sobrepeso grado I";
    } else if (imc >= 27 && imc <= 29.9) {
            texto = "Sobrepeso grado II (preobesidad)";
    } else if (imc >= 30 && imc <= 34.9) {
            texto = "Obesidad de tipo I";
    } else if (imc >= 35 && imc <= 39.9) {
            texto = "Obesidad de tipo II";
    } else if (imc >= 40 && imc <= 49.9) {
            texto = "Obesidad de tipo III (m�rbida)";
    } else {
            texto = "Obesidad de tipo IV (extrema)";
    }

    document.getElementById("resultadoIMC").innerHTML = texto;
}











var aleatorio= parseInt(Math.random() * 10);
var intentos = 3;
//alert(aleatorio);
function comprobar() {
    var numero = document.getElementById("numero").value;

    var texto = "";

    if (intentos > 0) {
        if (numero == aleatorio) {
            texto = "Has Acertado!!!";
        } else if (numero > aleatorio) {
            intentos = intentos - 1;
            texto = "El n�mero que buscas es menor y te quedan " + intentos + " intentos";
        } else {
            intentos = intentos - 1;
            texto = "El n�mero que buscas es mayor y te quedan " + intentos + " intentos";
        }
    } else {
            texto = "Sin intentos";
    }    

    document.getElementById("resultadoAleatorio").innerHTML = texto;
}
