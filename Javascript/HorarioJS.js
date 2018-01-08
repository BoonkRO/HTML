//Descripción asignatura

function BBDD(){
	document.getElementById("datosAsignatura").innerHTML = "Bases de Datos es impartido por Jaume Oliver Lafont. Esta asignatura tiene como objetivo principal conocer las principales ventajas que aporta el uso de la tecnología de Bases de Datos (BD) en la implementación de sistemas de información, así como familiarizarse con el diseño, implementación, explotación, y administración de bases de datos."
}

function LLMM(){
	document.getElementById("datosAsignatura").innerHTML = "Lenguaje de Marcas es impartida por Rafael Gion Muñoz. Esta asignatura tiene como objetivo conocer los lenguajes de marcas y sus características, ventajas, manejo y uso para la elaboración de documentos en la web"
}

function FOL(){
	document.getElementById("datosAsignatura").innerHTML = "Formación y Orientación Laboral es impartida por unknownName de FOL. La signatura de FOL contiene la formación necesaria para que el alumno pueda insertarse laboralmente y desarrollar su carrera profesional. Así, dada la premisa fundamental de la Formación Profesional que entiende esta etapa como un medio dirigido a la incorporación del alumnado a la vida laboral activa, se puede entender la importancia que tiene el módulo de FOL. Los contenidos sobre los que versará el módulo serán, entre otros, los siguientes: El contrato de trabajo, la nómina, la búsqueda activa de empleo, la gestión del conflicto y equipos de trabajo o contenidos relativos a la prevención de riesgos en la empresa."
}

function SSII(){
	document.getElementById("datosAsignatura").innerHTML = "Sistemas Informáticos es impartida por Ramón Jaume Vidal. Se busca dotar al alumno de las competencias generales para la instalación, administración y uso de un sistema informático tipo computador. La asignatura se centra en el uso de los sistemas operativos Windows y Linux. En lo posible se utilizan conceptos multiplataforma."
}

function Programacion(){
	document.getElementById("datosAsignatura").innerHTML = "Programación es impartida por David Gelpi Fleta. El objetivo general de la asignatura de Programación es que los estudiantes sean capaces de resolver de manera eficaz distintos problemas de carácter general, con independencia del lenguaje de programación utilizado. Este objetivo requiere que los alumnos que cursen la asignatura adquieran el conocimiento teórico y práctico sobre las técnicas básicas de programación estructurada consiguiendo la obtención de ideas intuitivas y claras de los conceptos, y permitirá entender fácilmente nuevos modelos facilitando la aplicación práctica de los algoritmos."
}

function ED(){
	document.getElementById("datosAsignatura").innerHTML = "Entornos de Desarrollo es impartida por David Gelpi Fleta. Entornos de Desarrollo trata las principales clases de entornos y herramientas de programación, incluyendo ejemplos importantes de los mismos y la realización de prácticas sobre ellos. Además de controladores de versiones como Git y sus derivados."
}

function Tutoria(){
	document.getElementById("datosAsignatura").innerHTML = "Turoria es una 'asignatura' impartida por David Gelpi Fleta. Tutoria es una asignatura presencial y obligatoria pero únicamente los dias que sea necesario impartirla y con previo aviso del tutor."
}


//Ratón sobre cuadro o no

function selectedBD(){
	$('.BBDD').css("background-color", "blue");
}

function unselectedBD(){
	$('.BBDD').css("background-color", "#FFF0F5");
}


function selectedLLMM(){
	$('.LLMM').css("background-color", "green");
}

function unselectedLLMM(){
	$('.LLMM').css("background-color", "#FFF0F5");
}


function selectedED(){
	$('.ED').css("background-color", "orange");
}

function unselectedED(){
	$('.ED').css("background-color", "#FFF0F5");
}


function selectedProg(){
	$('.Prog').css("background-color", "yellow");
}

function unselectedProg(){
	$('.Prog').css("background-color", "#FFF0F5");
}


function selectedSSII(){
	$('.SSII').css("background-color", "purple");
}

function unselectedSSII(){
	$('.SSII').css("background-color", "#FFF0F5");
}


function selectedFOL(){
	$('.FOL').css("background-color", "red");
}

function unselectedFOL(){
	$('.FOL').css("background-color", "#FFF0F5");
}


function selectedTuto(){
	$('.Tutoria').css("background-color", "grey");
}

function unselectedTuto(){
	$('.Tutoria').css("background-color", "#FFF0F5");
}
