var totalNoticias = 0;
var numeroNoticia = 0;

$.getJSON('data/1.json', function(data) {
    $.each(data.Noticias, function(x, y) {
        totalNoticias++;
    });
});

function cargarNoticias() {

    if (numeroNoticia < totalNoticias) {

        $.getJSON("data/1.json", function (data) {
            let noticias = document.getElementById('noticias');

            let div = document.createElement('div');
            div.setAttribute('class', 'noticia');
            div.setAttribute('onclick', 'mostrarNoticia(this)');
            noticias.appendChild(div);

            let titulo = document.createElement('h2');
            titulo.setAttribute('class', 'titulo');
            titulo.innerHTML = data.Noticias[numeroNoticia]['titulo'];
            div.appendChild(titulo);

            let icono = document.createElement('h6');
            let icono2 = document.createElement('span');
            icono2.setAttribute('class', 'glyphicon glyphicon-time');
            icono.appendChild(icono2);


            let preTexto = document.createElement('p');
            preTexto.setAttribute('class', data.Noticias[numeroNoticia]['preTexto']);
            preTexto.innerHTML = data.Noticias[numeroNoticia]['preTexto'];
            div.appendChild(preTexto);

            let texto = document.createElement('p');
            texto.setAttribute('class', 'noticiaCompleta');
            texto.setAttribute('style', 'display:none');
            texto.innerHTML = data.Noticias[numeroNoticia]['texto'];
            div.appendChild(texto);

            let imagen = document.createElement('img');
            imagen.setAttribute('src', data.Noticias[numeroNoticia]['imgbig']);
            div.appendChild(imagen);

            let separacion = document.createElement('hr');
            div.appendChild(separacion);


            numeroNoticia++;
        })
    }

    else{
        alert("No hay mas noticias, próximamente más.");

        /*let finNoticias = document.createElement('h5');
        let final = document.createElement('div');
        finNoticias.innerHTML = "No hay mas noticias, próximamente más --> :D";
        final.appendChild(finNoticias);*/
    }
}

