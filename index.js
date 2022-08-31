let bars = document.getElementById("3bar") ;
let navBox = document.getElementById("nav-item-box");
let allNavLinks = document.querySelectorAll(".nav-links");

function toogleActiveClass(){
    bars.classList.toggle("active");
    navBox.classList.toggle("menu-active");
}

bars.addEventListener("click", toogleActiveClass);
allNavLinks.forEach(function(navItem){
    navItem.addEventListener("click",toogleActiveClass);
})
