var slider = document.getElementById("skala");
var size = 0;
slider.oninput = function() {
    size = slider.value / 50;
    document.getElementById("main").style.transform = 'scale('+size+')'
}

