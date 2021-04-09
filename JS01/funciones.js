function init() {
//	alert(document.getElementById("usuario").value);
//	var usu = prompt("Introduzca usuario");
//	document.getElementById("usuario").value = usu;

	var lista = document.getElementByName("valores");
	for (let i = 0; i < lista.length; i++) {
		 alert(lista[i].value);
	}
}

function mostrarMensaje() {
	document.getElementById("texto").innerHTML = "<b>TEXTO</b>";
	document.getElementById("texto").style = "color: #c0c0c0";
	document.getElementById("texto").className = "borde";
}

function ocultarCapa() {
	document.getElementById("principal").style = "display: none"
}
function mostrarCapa() {
	document.getElementById("principal").style = "display: visibility"
}


function mostrarAlerta() {
	alert(AVISO);
}


window.addEventListener("load",init, false);