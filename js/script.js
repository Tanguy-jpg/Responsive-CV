let manette = document.getElementById('manette');
let violon = document.getElementById('violon');
let nav = document.querySelector('nav');
let page = document.getElementById('page');

window.addEventListener("scroll", function(){
    var value = window.scrollY;

    manette.style.left = value * -1 + "px";
    manette.style.top = value * 1 + "px";

    violon.style.left = value * 1 +"px";
    violon.style.top = value * -2 + "px";

    page.style.opacity = value * 0.2 + "%";
})

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}