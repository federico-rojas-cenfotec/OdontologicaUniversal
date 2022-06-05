/* programación para la sección del vídeo */
/* función para revelar el vídeo y que se reproduzca automáticamente */
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    video.src = this.src;

    video_id.src = video + 'autoplay = 1';
    document.getElementById(div).style.display = 'block';
}

/* función para ocultar el vídeo y eliminar la reproducción automática */
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}

/*  */