//elasticidad boton scrolltop
$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        //velocidad de la elasticidad
        //1 seg equivale a 1000
        speed: 2000,
        //tipos de aceleración https://easings.net
        easing: 'easeInOutQuad',
    });
});

//Esconder o mostrar el botón ScrollTop al usar el scroll de la página web
window.onscroll = function() {
    /*carga la función scrollFunction*/
    scrollFunction()
};

function scrollFunction() {
    /* se usa el operador lógico O */
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        /*muestra el botón scrollTop*/
        document.getElementById("flechabtn").style.display = 'block';
    } else {
        /*esconde el botón scrolltop */
        document.getElementById("flechabtn").style.display = 'none';
    }
}

/* Función Scrolltop que se llama desde el HTML */
function topFunction() {
    $('a.scroll-top').click(function(event) {
        /* preventDefault es un método que cancela el evento si es cancelable */
        event.preventDefault();
        /* llama a la etiqueta html-body para poner el scrolltop en 0 */
        $('html, body').animate({ scrollTop: 0 });
    });
}