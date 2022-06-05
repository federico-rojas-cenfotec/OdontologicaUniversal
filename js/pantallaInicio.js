function ingresar() {
    var nombreU = document.getElementById("usuario").value;
    var claveU = document.getElementById("clave").value;

    if (nombreU == "" || claveU == "") {
        Swal.fire({
            title: 'Atención Amigo!',
            text: '<p style="font-size: 18px">Esta ventana va a cerrarse en 7 segundos</p>',
            imageUrl: "img/formularioEnBlanco.jpg",
            imageWidth: 200,
            imageHeigth: 100,
            imageAlt: 'Logotipo de error de haber dejado en blanco el usuario o clave o ambos',
            html: '<br><br><p style="font-size: 18px">El usuario o la clave están en blanco. Inténtelo de nuevo por favor</p>' + '<p style="font-size: 18px">Esta ventana va a cerrarse en 7 segundos</p>' + '<br>',
            icon: 'error',
            timer: 7000,
            didOpen: function() {
                swal.showLoading()
                    //onOpen es igual a didOpen
            }
        }).then(
            function() {},
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('Desplegable cerrada')
                }
            }
        )
        document.getElementById("usuario").value = "";
        document.getElementById("clave").value = "";
    } else {
        if (nombreU != "dic" || claveU != "25") {
            Swal.fire({
                title: 'Atención Amigo!',
                text: 'Esta ventana va a cerrarse en 7 segundos',
                imageUrl: "img/logoNoIngreso.png",
                imageWidth: 200,
                imageHeigth: 100,
                imageAlt: 'Logotipo de error de digitación de usuario o clave',
                html: '<br><br><p style="font-size: 18px">El usuario o la clave no coinciden con nuestros registros. Inténtelo de nuevo por favor</p>' + '<p style="font-size: 18px">Esta ventana va a cerrarse en 7 segundos' + '</p>',
                icon: 'error',
                timer: 7000,
                didOpen: function() {
                    swal.showLoading()
                        //onOpen es igual a didOpen
                }
            }).then(
                function() {},
                function(dismiss) {
                    if (dismiss === 'timer') {
                        console.log('Desplegable cerrada')
                    }
                }
            )
            document.getElementById("usuario").value = "";
            document.getElementById("clave").value = "";
        } else {
            window.location = "app.html";
            document.getElementById("usuario").value = "";
            document.getElementById("clave").value = "";
        }
    }

}

function borrar() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}