const button = document.getElementById("toggle");
const navbar = document.getElementById("navbar");

button.addEventListener("click", () => {
    button.classList.toggle("open");
    navbar.classList.toggle("open");
});