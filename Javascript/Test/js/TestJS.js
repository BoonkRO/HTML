var numPreguntas = 0;
var xmlDoc;
var resultadoFinal = 0;

function readXML() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		xmlDoc = this.responseXML;
	 	numPreguntas = xmlDoc.getElementsByTagName('pregunta').length;
	  	gestionarXml(this);
		}
	};
	xhttp.open("POST", "testXML.xml", true);
	xhttp.send();

}


function gestionarXml(dadesXml){
	for (var i=0; i<numPreguntas; i++){
		var categoria = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('category')[0].innerHTML;

		switch (category) {
			case "radio":
				tipoRadio(i);
				break;
			case "check":
				tipoCheck(i);
				break;
		}
	}
}


function tipoRadio(i){
	var solucion = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('opcion').length;
	var form = document.getElementById("formulario");
	var div = document.getElementById("div");

	div.setAttribute("id", "div" + i);
	div.setAttribute("class", "pregunta");
	element.appendChild(div);

	var enunciado = document.createElement("label");
	enunciado.setAttribute('for', i);
	enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "</br>";

	div.appendChild(enunciado);


	for (var x=0; x<numSol; x++){
		var pregunta = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[x].innerHTML;
		var radioButton = document.createElement("input");
		var label document.createElement("label");


		radioButton.setAttribute("type", "radio");
		radioButton.setAttribute("name", i);
		radioButton.setAttribute("value", x);
		radioButton.setAttribute('id', k + "radio");
		div.appendChild(radioButton);

		label.setAttribute('for', i);
		label.innerHTML = pregunta + "</br>";

		div.appendChild(label);

	}
}


function tipoCheck(i) {
	var solucion = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('opcion').length;
	var form = document.getElementById("formulario");
	var div = document.getElementById("div");

	div.setAttribute("id", "div" + i);
	div.setAttribute("class", "pregunta");
	element.appendChild(div);

	var enunciado = document.createElement("label");
	enunciado.setAttribute('for', i);
	enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "</br>";

	div.appendChild(enunciado);


	for (var x=0; x<numSol; x++){
		var pregunta = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[x].innerHTML;
		var checkBox = document.createElement("input");
		var label document.createElement("label");


		checkBox.setAttribute("type", "checkbox");
		checkBox.setAttribute("name", i);
		checkBox.setAttribute("value", x);
		checkBox.setAttribute('id', k + "radio");
		div.appendChild(checkBox);

		label.setAttribute('for', i);
		label.innerHTML = pregunta + "</br>";

		div.appendChild(label);

	}

}


function puntuacionFinal(){
	var form = document.getElementById("cabecera");
	var div = document.createElement("div");

	div.setAttribute("id", "puntuacion");
	form.appendChild(div);

	var label = document.createElement('label');
	label.innerHTML = "Puntuación: " + resultadoFinal;
	div.appendChild(label);
}


function corregirPreguntas() {
	var numPreguntas = xmlDoc.getElementsByTagName('pregunta').length;
	resultadoFinal = 0;

	for (var i=0; i<numPreguntas; i++){
		var tipo = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName("category")[0].innerHTML;

		if (tipo == "radio") {
			corregirRadio(i);
		}
		else if (tipo == "check") {
			corregirCheck(i);
		}
	}
	puntuacionFinal();

}


function corregirRadio(x){
	var radios = document.getElementsByName(x);
    var isNull = true;
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked)
        {
            var seleccionada = radios[z].getAttribute("value");

            var respuesta = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("opcion")[seleccionada].getAttribute("correcta");

            if (respuesta) {
                resultadoFinal++;
            }
            break;
        }
    }
}


function corregirCheck(x) {
	var contarCorrectas = 0;
    var contarSeleccionadas = 0;
    var seleccionadasCorrectas = 0;
    var radios = document.getElementsByName(x);


    for (var z = 0, length = radios.length; z < length; z++) {
        var preguntaSel = radios[z].getAttribute("value");
        if (xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("opcion")[preguntaSel].getAttribute("correcta")) {
            contarCorrectas += 1;
        }

    }


    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked)
        {
            var preguntaSel = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("opcion")[preguntaSel].getAttribute("correcta");

            if (resp) {
                seleccionadasCorrectas++;
                contarSeleccionadas++;
            }
            else {
                contarSeleccionadas++;
            }
        }
    }

    if (seleccionadasCorrectas === contarCorrectas && contarCorrectas === contarSeleccionadas) {
        resultadoFinal++;
    }

}

