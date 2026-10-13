// Mobile Navigation Menu

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a navigation link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

// Automatically update the footer year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Display a message when the page is fully loaded

window.addEventListener("load", function () {
    console.log("Anudurga's portfolio website loaded successfully!");
});