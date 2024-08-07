/*--==================== VARIABLES ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

/*--==================== EVENT LISTENERS ====================*/
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.remove("-right-full");
    navMenu.classList.add("right-0");
  });
}

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("right-0");
    navMenu.classList.add("-right-full");
  });
}
