const btnOpen = document.querySelector(".main__btn");
const btnClose = document.querySelector(".main__btn-mobile");
const popUp = document.querySelector(".main__pop-up-container");

btnOpen.addEventListener("click", function( ) {
    popUp.classList.toggle("hidden");
    btnOpen.classList.toggle("main__btn--bg");
    btnOpen.firstElementChild.classList.toggle("main__btn-filter");
});

btnClose.addEventListener("click", function( ) {
    popUp.classList.toggle("hidden");
});