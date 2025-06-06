const text = document.getElementById("text");
const leftAlign = document.getElementById("leftalign");
const rightAlign = document.getElementById("rightalign");
const centerAlign = document.getElementById("centeralign");
const justify = document.getElementById("justify");
const sizeInput = document.getElementById("sizeinput");
const sizeOutput = document.getElementById("sizeoutput");
const blackColor = document.getElementById("blackbtn");
const blueColor = document.getElementById("bluebtn");
const redColor = document.getElementById("redbtn");
const noColor = document.getElementById("transparentbtn");
const englishLanguage = document.getElementById("englishbtn");
const hungarianLanguage = document.getElementById("hungarianbtn");
const germanLanguage = document.getElementById("germanbtn");
const linkInput = document.getElementById("linkinput");
const widthInput = document.getElementById("widthinput");
const heightInput = document.getElementById("heightinput");
const imageOutput = document.getElementById("imageoutput");
const image = document.getElementById("image");
const languages = [
    "Ez egy hosszú bekezdés, a szövegformázási lehetőségek erre vonatkoznak, az igazítás, színezés, a méretezés és a nyelvváltoztatás is",
    "This is a long paragraph, the text formatting options apply to it, including alignment, coloring, sizing, and changing the language.",
    "Dies ist ein langer Absatz. Die Textformatierungsoptionen gelten für ihn, einschließlich Ausrichtung, Farbgebung, Skalierung und Sprachänderung"
];

function alignLeft() {
    text.style.textAlign = "left";
}

function alignRight() {
    text.style.textAlign = "right";
}

function alignCenter() {
    text.style.textAlign = "center";
}

function alignJustify() {
    text.style.textAlign = "justify";
}

function setTextSize() {
    text.style.fontSize = sizeInput.value + "px";
    sizeOutput.innerHTML = sizeInput.value;
}

function setColorBlack() {
    text.style.color = "#242424";
}

function setColorBlue() {
    text.style.color = "#4287f5";
}

function setColorRed() {
    text.style.color = "#e64b39";
}

function setNoColor() {
    text.style.color = "transparent";
}

function setEng() {
    text.innerHTML = languages[1];
}

function setHun() {
    text.innerHTML = languages[0];
}

function setGer() {
    text.innerHTML = languages[2];
}

function changeImage() {
    image.src = linkInput.value;
    image.style.height = heightInput.value;
    image.style.width = widthInput.value;
}

leftAlign.addEventListener("click", () => alignLeft());
rightAlign.addEventListener("click", () => alignRight());
centerAlign.addEventListener("click", () => alignCenter());
justify.addEventListener("click", () => alignJustify());
sizeInput.addEventListener("input", () => setTextSize());
blackColor.addEventListener("click", () => setColorBlack());
blueColor.addEventListener("click", () => setColorBlue());
redColor.addEventListener("click", () => setColorRed());
noColor.addEventListener("click", () => setNoColor());
englishLanguage.addEventListener("click", () => setEng());
hungarianLanguage.addEventListener("click", () => setHun());
germanLanguage.addEventListener("click", () => setGer());
imageOutput.addEventListener("click", () => changeImage());