const inputField = document.getElementById("input-field");
const button1 = document.getElementById("gomb1");
const button2 = document.getElementById("gomb2");
const button3 = document.getElementById("gomb3");
const button4 = document.getElementById("gomb4");
const outPut = document.getElementById("output");
const img = document.getElementById("image");
const links = [
    "https://chefmarket.hu/public/upload/product_image/3/3958/27227/elo00817-zoldalma701516331.jpg",
    "https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Volvo_S60_%283rd_generation%29_IMG_8468.jpg/800px-Volvo_S60_%283rd_generation%29_IMG_8468.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBE_-4RtKOs9adLGnUORns_WQLyr9xtvOMA&s"
];

function button1Click() {
    let inputText = inputField.value;
    outPut.innerHTML = "Szia, " + inputText + "!";
};

function randomImage() {
    img.src = links[getRandomNumber(1,4)]
};

function torol() {
    outPut.innerHTML = "";
};

function urlCsere() {
    let inputUrl = inputField.value;
    img.src = inputUrl;
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};

button1.addEventListener('click', () => button1Click());
button2.addEventListener('click', () => randomImage());
button3.addEventListener('click', () => torol());
button4.addEventListener('click', () => urlCsere());
