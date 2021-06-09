let manette = document.getElementById('manette');
let violon = document.getElementById('violon');
let nav = document.querySelector('nav');

window.addEventListener("scroll", function(){
    var value = window.scrollY;

    manette.style.left = value * -1 + "px";
    manette.style.top = value * 1 + "px";

    violon.style.left = value * 1 +"px";
    violon.style.top = value * -2 + "px";

    nav.style.opacity = value * 0.12 + "%";
})