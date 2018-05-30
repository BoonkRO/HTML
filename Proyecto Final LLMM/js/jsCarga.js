var totalNoticias = 0;

$.getJSON('data/1.json', function(data) {
    $.each(data.Noticias, function(x, y) {
        totalNoticias++;
    });
});

function cargarNoticias() {
    let numeroNoticia = 0;

    if (numeroNoticia < totalNoticias) {

        $.getJSON("data/1.json", function (data) {
            let noticias = document.getElementById('noticias');

            let div = document.createElement('div');
            div.setAttribute('class', 'noticia');
            div.setAttribute('onclick', 'ampliarNoticia(this)');
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
            preTexto.setAttribute('class', data.Noticias[numeroNoticia]['resumenNoticia']);
            preTexto.innerHTML = data.Noticias[numeroNoticia]['resumenNoticia'];
            div.appendChild(preTexto);

            let texto = document.createElement('p');
            texto.setAttribute('class', 'texto');
            texto.setAttribute('style', 'display:none');
            texto.innerHTML = data.Noticias[numeroNoticia]['texto'];

            let imagen = document.createElement('img');
            imagen.setAttribute('src', data.Noticias[numeroNoticia]['imgbig']);
            div.appendChild(imagen);

            let separacion = document.createElement('hr');
            div.appendChild(separacion);


            numeroNoticia++;
        })
    }

    else{
        let finNoticias = document.createElement('h5');
        let final = document.createElement('div');
        finNoticias.innerHTML = "No hay mas noticias, próximamente más --> :D";
        final.appendChild(finNoticias);
    }
}


function ampliarNoticia(info) {
    if($('.oculto', info).is(':visible')){
        $('.oculto', info).slideUp();
    }
    else{
        $('.oculto', info).slideDown();
    }
}

