const navToggle = document.querySelector(".nav-toggle");

const navMenu = document.querySelector(".nav-link-container");

const navBackground = document.querySelector(".nav-link-bg");

// Evento click menu
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_active");
    navBackground.classList.toggle("nav-link-bg__active");
})

// Evento click menu-add
const addToggle = document.querySelector(".add-toggle");

const addMenu = document.querySelector(".nav-add-container");
addToggle.addEventListener("click", () => {
    addMenu.classList.toggle("add_active");
})