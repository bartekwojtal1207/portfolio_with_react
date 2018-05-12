$(function () {

    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 10, "density": {"enable": true, "value_area": 100}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 1,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 5, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });

    var showText = function (target, message, index, interval) {
        if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }

};

var textToAnimate = 'Bartosz Wojtal::develepor'


setTimeout(function () {
    showText("#msg", textToAnimate, 0, 500);
},1000);

var mainWelcomeBtn = $('.welcome-button'),
    elementToAnimate = $('.js-show-text');
    mainWelcomeBtn.mouseenter(function () {
    elementToAnimate.addClass('js-show-text-hover')
});
    mainWelcomeBtn.mouseleave(function () {
    elementToAnimate.removeClass('js-show-text-hover')

});


});