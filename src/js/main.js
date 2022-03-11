const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const activeItem = document.querySelector(".menu-nav__link");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    activeItem.classList.add("open", "active");
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    activeItem.classList.remove("active", "open");
    showMenu = false;
  }
}

// const activeItem soll eigentlich die aktive Seite mit secondary-color markieren,
//     wenn das Menu-Hamburger betätigt wird. Es funktioniert so nicht, bleibt
// aber erst einmal drin, um später eventuell noch aufzugreifen.
