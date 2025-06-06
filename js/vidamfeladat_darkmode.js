const darkButton = document.getElementById("darkmode");
const body = document.getElementById("body");
const aleftAlign = document.getElementById("leftalign");
const arightAlign = document.getElementById("rightalign");
const acenterAlign = document.getElementById("centeralign");
const ajustify = document.getElementById("justify");
const ablackBtn = document.getElementById("blackbtn");
const atransparentBtn = document.getElementById("transparentbtn");

function turnBlack() {
    darkButton.classList.toggle("dark");
    body.classList.toggle("dark");
    aleftAlign.classList.toggle("dark");
    arightAlign.classList.toggle("dark");
    acenterAlign.classList.toggle("dark");
    ajustify.classList.toggle("dark");
    ablackBtn.classList.toggle("dark");
    atransparentBtn.classList.toggle("dark");
}

darkButton.addEventListener("click", () => turnBlack());