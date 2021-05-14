
let imagen;

function cambiar(numero){

    if (numero == '1'){
        document.getElementById('imagenExpuesta').style.display = 'none';

        imagen = ` <img src="images/pasillo.png" alt="imagen expuesta" id="imagenExpuesta">`;

        document.getElementById('expositor').innerHTML = imagen ;
    }

    if (numero == '2'){
        document.getElementById('imagenExpuesta').style.display = 'none';

        imagen = ` <img src="images/lavavo.png" alt="imagen expuesta" id="imagenExpuesta">`;

        document.getElementById('expositor').innerHTML = imagen ;
    }

    if (numero == '3'){
        document.getElementById('imagenExpuesta').style.display = 'none';

        imagen = ` <img src="images/lavavo1.png" alt="imagen expuesta" id="imagenExpuesta">`;

        document.getElementById('expositor').innerHTML = imagen ;
    }

    if (numero == '4'){
        document.getElementById('imagenExpuesta').style.display = 'none';

        imagen = ` <img src="images/gimnasio.png" alt="imagen expuesta" id="imagenExpuesta">`;

        document.getElementById('expositor').innerHTML = imagen ;
    }
    if (numero == '5'){
        document.getElementById('imagenExpuesta').style.display = 'none';

        imagen = ` <img src="images/restaurante.png" alt="imagen expuesta" id="imagenExpuesta">`;

        document.getElementById('expositor').innerHTML = imagen ;
    }

    if (numero == '6'){
        document.getElementById('imagenExpuesta').style.display = 'none';

        imagen = ` <img src="images/piscina.png" alt="imagen expuesta" id="imagenExpuesta">`;

        document.getElementById('expositor').innerHTML = imagen ;
    }



}