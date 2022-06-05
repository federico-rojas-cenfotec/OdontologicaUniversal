let animation = anime({
    targets: '.letter',
    opacity: 0.8,
    translateY: 80,
    rotate: {
        value: 360,
        duration: 3500,
        easing: 'easeInExpo'
    },
    scale: anime.stagger([0.5, 1.25], { from: 'center' }),
    delay: anime.stagger(150, { start: 3000 }),
    translateX: [0, 0]
});

let box = document.querySelector('#box');

let animacion = anime({
    targets: '#content',
    translateY: [
        { value: 50, duration: 500 },
        { value: 0, duration: 500, delay: 1500 },
        { value: -53, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 2500 },
        { value: 50, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 1500 }
    ],
    translateX: [
        { value: 53, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 2500 },
        { value: -53, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 2500 }
    ],
    easing: 'linear',
    begin: function() {
        box.style.borderBottom = "none";
    },
    complete: function() {
        box.style.borderBottom = "solid darkorange 3px";
    }
});