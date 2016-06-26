var burger = document.querySelector(".main-header__burger-btn-wrapper");
var menu = document.querySelector(".main-nav");
var close = document.querySelector(".main-nav__close-btn");

burger.addEventListener("click", function(event) {
event.preventDefault();
menu.classList.add("main-nav--show");
burger.classList.add("main-header__burger-hidden");
});

close.addEventListener("click", function(event) {
event.preventDefault();
menu.classList.remove("main-nav--show");
burger.classList.remove("main-header__burger-hidden");
});


