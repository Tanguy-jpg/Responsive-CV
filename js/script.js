// PARALAX EFFECT TOP OF PAGE 
let bg = document.getElementById('paralax');

let fox = document.getElementById('fox');
let coding = document.getElementById('coding');
let manette = document.getElementById('manette');
let ombManette = document.getElementById('omb-manette');
let ombTerre = document.getElementById('omb-terre');
let terre = document.getElementById('terre');
let tanguy = document.getElementById('tanguy');
let brunetti = document.getElementById('brunetti');

window.addEventListener("scroll", function(){
    var value = window.scrollY;

    bg.style.filter = "grayscale( " + value * 0.2 + "%)";

    manette.style.left = value * 1 + "px";
    ombManette.style.left = value * 1 + "px";
    coding.style.left = value * 0.4 + "px";
    brunetti.style.left = value * 0.6 + "px";

    tanguy.style.left = value * -0.6 + "px";
    terre.style.left = value * -1 + "px";
    ombTerre.style.left = value * -1 + "px";
    fox.style.top = value * 0.1 + "px";

})
//Open in new tab

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

// Scroll top or down
function toTop(){
    window.scrollTo(0, 0);
}
function toDown(){
    window.scrollTo(0, 1000);
}

// OPEN MODALS ON CLICK

function openModals(p){
    p.style.transform = "scale(1)"
}

function closeModals(p){
    p.style.transform = "scale(0)"
}
