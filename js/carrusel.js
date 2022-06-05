var foto = 1;
var micarrusel = {};
var total = 0;

micarrusel = [{ imageurl: "imagenes/implante1Carrusel.jpg", titulo: "Implantes únicos" }, { imageurl: "imagenes/implante2Carrusel.jpg", titulo: "Implante de carga inmediata" }, { imageurl: "imagenes/implante3Carrusel.jpg", titulo: "Implante de 2 fases" }, { imageurl: "imagenes/implante4Carrusel.jpg", titulo: "Implante de 2 fases, parte 2" }, { imageurl: "imagenes/implante5Carrusel.jpg", titulo: "Implante completo" }];

var cambiar = function(mas) {
    total = micarrusel.length;
    foto += mas;
    if (foto > total) {
        foto = 1;
    }
    if (foto < 1) {
        foto = total;
    }
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}