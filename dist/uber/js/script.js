let burger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");

});