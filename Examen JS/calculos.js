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
                Pedir frase al usuario y un número. Repetir en pantalla la frase
                tantas veces como indique el número
            </p>
            <table>
                <tr>
                    <td><label for="frase">Frase</label> </td>
                    <td><input type="text" name="frase" id="frase"> </td>
                </tr>
                    <tr>
                        <td><label for="num">Número</label></td>
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
            + " tiene " + edad + " años y en días son " + dias;
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
            texto = "Obesidad de tipo III (mórbida)";
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
            texto = "El número que buscas es menor y te quedan " + intentos + " intentos";
        } else {
            intentos = intentos - 1;
            texto = "El número que buscas es mayor y te quedan " + intentos + " intentos";
        }
    } else {
            texto = "Sin intentos";
    }    

    document.getElementById("resultadoAleatorio").innerHTML = texto;
}





















function operaciones(op)
{

    var ops = {
            sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },

        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };



    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;


    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
            document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 1</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
            document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 2</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    //Si se han introducido los números en ámbas cajas, operamos:
        switch(op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'dividir':
                var resultado = ops.dividir(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;

        }
    }

}
//area triangle
function areati()  {
    var base = prompt ("Introduce la base")
    var altura = prompt ("Introduce la altura")
    var sum = (1/2)*base*altura
    alert("El área es "+sum+"")

    }
    //area circle
    function areac()  {
    var radius = prompt ("Introduce el radio")
    var pi = "3.14159"
    var sum = radius*radius*pi
    alert("El área es "+sum+"")

    }
    //area rectangle
    function arear()  {
    var length = prompt ("Introduce legth")
    var width = prompt ("Introduce width")
    var sum = width*length
    alert("El área es "+sum+"")

    }
    //area trapezoid
    function areata()  {
    var baseone = prompt ("Introduce base one")
    var basetwo = prompt ("Introduce base two")
    var altura = prompt ("Introduce altura")
    var sum = (1/2)*altura*(baseone+basetwo)
    alert("El área es "+sum+"")

    }
    //area rhombus
    function arearh()  {
    var onediag = prompt ("Introduce la primera diagonal")
    var twodiag = prompt ("Introduce la segunda diagonal")
    var sum = onediag*twodiag*(1/2)
    alert("El área es "+sum+"")

    }
    //area oval
    function areao()  {
    var length = prompt ("Introduce la longitud")
    var altura = prompt ("Introduce la altura")
    var pi = 3.14159
    var sum = (pi*length)/altura
    alert("El área es "+sum+"")

    }
    //volume rect prism
    function volumerp()  {
    var length = prompt ("Introduce length")
    var width = prompt ("Introduce width")
    var altura = prompt ("Introduce altura")
    var sum = length*width*altura
    alert("El volumen es "+sum+"")

    }

<title>Suma de valores en texbox</title>
        <script>
            function suma(){
var vtemp=0
vresult=0
for (var i=1;i<5;i++){ // hace un bucle para calcular todos los valores
                vtemp = eval("parseFloat(document.all.box" + i + ".value)")
if(!isNaN(vtemp)) vresult+=vtemp // si valor es número negativo, añadir
}
document.all.result.value=vresult // cambia el último valor...Resultado uno
}
</script>
        <form>
            <p>Valor 1: <input name="box1" onchange="suma()" size="20"> Valor 2:
  <input name="box2" onchange="suma()" size="20"> <br>
                    Valor 3: <input name="box3" onblur="suma()" size="20"> Valor 4:
  <input name="box4" onblur="suma()" size="20"><br>
                            <br>
                                Suma total:<input name="result" size="20"> </p>
</form>
