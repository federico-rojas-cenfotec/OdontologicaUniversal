serv.onclick = function() {
    Swal.fire({
        title: 'Información',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
        },
        icon: 'info',
        iconColor: '#c23e06',
        html: '<strong style="font-size: 1.6rem">Conozca nuestros servicios para tener la sonrisa que tanto desea.</strong>',
        imageUrl: "img/logo.png",
        imageWidth: 40,
        imageAlt: 'Logotipo de la empresa',
        footer: '<a href="prevencion.html" style="font-size: 1.4rem;text-decoration: none;margin-right: 5rem;"><img src="img/prevencion-dental.png" width="38px"></a><a href="implantes.html" style="font-size: 1.4rem;text-decoration: none;margin-right: 5rem;"><img src="img/implantes-dentales.png" width="38px"></a><a href="estetica.html" style="font-size: 1.4rem;text-decoration: none;"><img src="img/odontologia-estetica.png" width="38px"></a>'
    });
}

function tarjeta1() {
    document.getElementById("tarj1").style.display = 'none';
    document.getElementById("tarj11").style.display = 'block';
}

function tarjeta11() {
    document.getElementById("tarj1").style.display = 'block';
    document.getElementById("tarj11").style.display = 'none';
}

function tarjeta2() {
    document.getElementById("tarj2").style.display = 'none';
    document.getElementById("tarj21").style.display = 'block';
}

function tarjeta21() {
    document.getElementById("tarj2").style.display = 'block';
    document.getElementById("tarj21").style.display = 'none';
}

/* programación del modal de quienes.html */
var modal = document.getElementById("modal1");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = 'none';
};

/* programación de la sección de Conózcanos */
function opciones(evt, info) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(info).style.display = 'block';
    document.getElementById(info).style.display = 'flex';
    evt.currentTarget.className += "active";
}