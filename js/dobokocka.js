const rollBtn = document.getElementById("roll");
const image = document.getElementById("image");
const rollNumber = document.getElementById("display");
let rolledNumber;
const numbers = [1, 2, 3, 4, 5, 6];
const sources = [
    "../src/img/dobokocka/oneface.png",
    "../src/img/dobokocka/twoface.png",
    "../src/img/dobokocka/threeface.png",
    "../src/img/dobokocka/fourface.png",
    "../src/img/dobokocka/fiveface.png",
    "../src/img/dobokocka/sixface.png"
];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function roll() {
    rolledNumber = randomNumber(0, sources.length);
    rollNumber.innerHTML = numbers[rolledNumber];
    image.src = sources[rolledNumber];
}

rollBtn.addEventListener("click", () => roll());