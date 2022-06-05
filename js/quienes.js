/* programación del modal de quienes.html */
/* modal de Prevención */
var modalPreve = document.getElementById("modal1");
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");

img1.onclick = function() {
    modalPreve.style.display = 'block';
    modalImg1.src = img1.src;
}
var span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function() {
    modalPreve.style.display = 'none';
}

/* modal de Estética */
var modalEstet = document.getElementById("modal2");
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");

img2.onclick = function() {
    modalEstet.style.display = 'block';
    modalImg2.src = img2.src;
}
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() {
    modalEstet.style.display = 'none';
}

/* modal de Implantes */
var modalImpla = document.getElementById("modal3");
var img3 = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");

img3.onclick = function() {
    modalImpla.style.display = 'block';
    modalImg.src = img3.src;
}
var span = document.getElementsByClassName("close3")[0];
span.onclick = function() {
    modalImpla.style.display = 'none';
};