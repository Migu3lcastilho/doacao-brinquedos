var btn = document.getElementById("btnMenu");
var menu = document.getElementById("menu");
var menuClose = document.getElementById("menuClose");

btn.addEventListener("click", ()=>{
    menu.classList.add("isOpen")
})
menuClose.addEventListener("click", ()=>{
    menu.classList.remove("isOpen")
})