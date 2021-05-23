let btnenviar = document.getElementById('reservar');
let formulario = document.getElementById('formulario');

btnenviar.onclick = function (){
    validar();

}


function validar() {

    if (!formulario.checkValidity()) {

        let nombre = document.getElementById("id_nombre");
        let apellido = document.getElementById('id_apellidos');
        let dni = document.getElementById('id_dni');
        let telefono = document.getElementById('id_telefono');
        let email = document.getElementById('id_email');
        let numeroTarjeta = document.getElementById('id_tarjetaNumero');
        let fechacaducidad = document.getElementById('id_fechadecaduciadad');
        let tarjetatitular = document.getElementById('id_tarjetaTitular');
        let cvv = document.getElementById('id_tarjetaCVV');
        let codigodescuento = document.getElementById('id_descuento');


        if (!nombre.checkValidity()) {
            document.getElementById('id_nombre').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_nombre').style.border = '2px solid #7FFF00FF';
        }

        if (!apellido.checkValidity()) {
            document.getElementById('id_apellidos').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_apellidos').style.border = '2px solid #7FFF00FF';
        }

        if (!dni.checkValidity()) {
            document.getElementById('id_dni').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_dni').style.border = '2px solid #7FFF00FF';
        }

        if (!telefono.checkValidity()) {
            document.getElementById('id_telefono').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_telefono').style.border = '2px solid #7FFF00FF';
        }

        if (!email.checkValidity()) {
            document.getElementById('id_email').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_email').style.border = '2px solid #7FFF00FF';
        }

        if (!numeroTarjeta.checkValidity()) {
            document.getElementById('id_tarjetaNumero').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_tarjetaNumero').style.border = '2px solid #7FFF00FF';
        }

        if (!fechacaducidad.checkValidity()) {
            document.getElementById('id_fechadecaduciadad').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_fechadecaduciadad').style.border = '2px solid #7FFF00FF';
        }

        if (!tarjetatitular.checkValidity()) {
            document.getElementById('id_tarjetaTitular').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_tarjetaTitular').style.border = '2px solid #7FFF00FF';
        }

        if (!cvv.checkValidity()) {
            document.getElementById('id_tarjetaCVV').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_tarjetaCVV').style.border = '2px solid #7FFF00FF';
        }

        if (!codigodescuento.checkValidity()) {
            document.getElementById('id_descuento').style.border = '2px solid #DC143CFF';
        } else {
            document.getElementById('id_descuento').style.border = '2px solid #7FFF00FF';
        }


    }

}



