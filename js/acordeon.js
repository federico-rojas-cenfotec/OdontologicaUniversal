//declaracion de variables y clase que se llama accordion
var acc = document.getElementsByClassName("accordion");
var i;


//ciclo repeticion
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Alternar entre agregar y eliminar la clase "activa", para resaltar el botón que controla el panel */
        //this.classList.toggle("active");
        /* Ocultar y mostrar el panel activo usando un condicional */

        //La propiedad nextElementSibling devuelve el elemento que sigue inmediatamente al elemento especificado, en el mismo nivel.
        var panel = this.nextElementSibling; //para controlar si la franja naranja está block o no y si lo está entonces se cierra y viceversa
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


//animacion del panel acordeon al abrirlo.
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        //La propiedad classList devuelve el nombre de clase de un elemento
        //this.classList.toggle("active");
        //nextElementSibling devuelve el elemento que sigue inmediatamente al elemento especificado, en el mismo nivel de árbol.
        var panel = this.nextElementSibling;
        //variable panel que puede establecer la altura máxima de un elemento...
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            //obtener la altura del elemento en px
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}