let bg = document.getElementById('paralax');

let fox = document.getElementById('fox');
let coding = document.getElementById('coding');
let manette = document.getElementById('manette');
let ombManette = document.getElementById('omb-manette');
let ombTerre = document.getElementById('omb-terre');
let terre = document.getElementById('terre');
let tanguy = document.getElementById('tanguy');
let brunetti = document.getElementById('brunetti');

let nav = document.querySelector('nav');
let page = document.getElementById('page');

window.addEventListener("scroll", function(){
    var value = window.scrollY;

    // bg.style.filter = "hue-rotate(-" + value * 0.05 + "deg)";
    bg.style.filter = "grayscale( " + value * 0.2 + "%)";

    manette.style.left = value * 1 + "px";
    ombManette.style.left = value * 1 + "px";
    coding.style.left = value * 0.4 + "px";
    brunetti.style.left = value * 0.6 + "px";

    tanguy.style.left = value * -0.6 + "px";
    terre.style.left = value * -1 + "px";
    ombTerre.style.left = value * -1 + "px";
    fox.style.top = value * 0.1 + "px";




    // page.style.opacity = value * 0.2 + "%";
})

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}