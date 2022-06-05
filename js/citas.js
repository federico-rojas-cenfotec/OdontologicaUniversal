function mostrar() {
    if (document.getElementById('preve').checked) {
        radioPreve();
        Swal.fire({
            icon: 'success',
            title: 'Atención usuario',
            text: 'Eligió la especialidad de Prevención',
        });
    }
    if (document.getElementById('impla').checked) {
        radioImpla();
        Swal.fire({
            icon: 'success',
            title: 'Atención usuario',
            text: 'Elegió la especialidad de Implantes',
        });
    }
    if (document.getElementById('estet').checked) {
        radioEstet();
        Swal.fire({
            icon: 'success',
            title: 'Atención usuario',
            text: 'Elegió la especialidad de Estética',
        });
    }
}

function radioPreve() {
    document.getElementById("prevencionFoto").style.display = 'block';
    document.getElementById("pPreve").style.display = 'block';

    document.getElementById("implantesFoto").style.display = 'none';
    document.getElementById("pImpla").style.display = 'none';

    document.getElementById("esteticaFoto").style.display = 'none';
    document.getElementById("pEstet").style.display = 'none';
}

function radioImpla() {
    document.getElementById("prevencionFoto").style.display = 'none';
    document.getElementById("pPreve").style.display = 'none';

    document.getElementById("implantesFoto").style.display = 'block';
    document.getElementById("pImpla").style.display = 'block';

    document.getElementById("esteticaFoto").style.display = 'none';
    document.getElementById("pEstet").style.display = 'none';
}

function radioEstet() {
    document.getElementById("prevencionFoto").style.display = 'none';
    document.getElementById("pPreve").style.display = 'none';

    document.getElementById("implantesFoto").style.display = 'none';
    document.getElementById("pImpla").style.display = 'none';

    document.getElementById("esteticaFoto").style.display = 'block';
    document.getElementById("pEstet").style.display = 'block';
}

function validar_datos() {
    let nombre = document.getElementById("nombreTXT").value;
    let apellido = document.getElementById("apellidoTXT").value;
    let correo = document.getElementById("correo").value;
    let tel = document.getElementById("tel").value;
    let wh = document.getElementById("wh").value;
    let cita = document.getElementById("cita").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre == "" || apellido == "" || correo == "" || tel == "" || wh == "" || cita == "" || mensaje == "") {
        Swal.fire({
            title: '',
            imageUrl: '../imagenes/alerta.jpg',
            textAlign: 'right',
            icon: '',
            iconColor: '#eea025',
            position: 'center',

            confirmButtonColor: '#0d6efd',

            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
            animation: true,
            customClass: 'recuerde1',
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown',
            },
            showCloseButton: true,
            html: '<strong style="font-size: 1.6rem">Por favor revise detenidamente, existen espacios en blanco</strong>'
        });
        return;
    }
    if (!(/^\d{8}$/.test(tel))) {
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'El teléfono digitado no sigue el modelo detallado',
        });
        return;
    }
    if (!(/^\d{8}$/.test(wh))) {
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'El whatsapp digitado no sigue el modelo detallado',
        });
        return;
    }

    if (document.getElementById('preve').checked == false && document.getElementById('impla').checked == false && document.getElementById('estet').checked == false) {
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'No ha elegido ninguna de nuestras especialidades',
        });
        return;
    }
    if (mensaje.length > 11) {
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'El tamaño máximo del mensaje es de 200 caracteres',
        });
    } else {
        Swal.fire({
            title: 'Gracias!',
            imageUrl: '../imagenes/enter.jpg',
            textAlign: 'right',
            icon: '',
            iconColor: '#eea025',
            position: 'center',

            confirmButtonColor: '#0d6efd',

            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
            animation: true,
            customClass: 'recuerde1',
            showClass: {
                popup: 'animate__animated animate__bounceInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__bounceOutDown',
            },
            showCloseButton: true,
            html: '<strong style="font-size: 1.6rem">Muy amable por completar sus datos. Pronto lo estaremos contactando</strong>'
        });
        nombreTXT.value = "";
        apellidoTXT.value = "";
        document.getElementById("correo").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("wh").value = "";
        document.getElementById("cita").value = "";
        document.getElementById("mensaje").value = "";

        document.getElementById("preve").checked = false;
        document.getElementById("impla").checked = false;
        document.getElementById("estet").checked = false;

        document.getElementById("prevencionFoto").style.display = 'none';
        document.getElementById("pPreve").style.display = 'none';
        document.getElementById("implantesFoto").style.display = 'none';
        document.getElementById("pImpla").style.display = 'none';
        document.getElementById("esteticaFoto").style.display = 'none';
        document.getElementById("pEstet").style.display = 'none';
    }
}