const inputField = document.getElementById("inputField");
const sorsolButton = document.getElementById("sorsol");
const nevOutput = document.getElementById("nevOutput");
const eroOutput = document.getElementById("eroOutput");
const leiras = document.getElementById("leiras");
const image = document.getElementById("image");

const szupererok = [
    "Lézer szemek",
    "Éjjel látás",
    "Csepeli",
    "Repűlés",
    "Kaka lövés"
]

const leirasok = [
    "Lézer szemeid vannak, minden amire ránézel elolvad.",
    "Éjszaka a sötétben látsz, ezt semmi sem befolyásolja.",
    "Csepeli vagy, kiemelkedőek a túlélő képességeid.",
    "Repülsz, ezt nem tudom tovább ragozni.",
    "Hihetetlenül erősen szarsz."
]

const sources = [
    "../src/img/kepesseg/lezerszemek.jpg",
    "../src/img/kepesseg/nightvision.png",
    "../src/img/kepesseg/csepel.jpg",
    "../src/img/kepesseg/repules.jfif",
    "../src/img/kepesseg/kakalas.jfif"
]

function randomNumbergen(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sorsolas() {
    nevOutput.innerHTML = inputField.value;
    let randomNumber = randomNumbergen(0, szupererok.length);
    eroOutput.innerHTML = szupererok[randomNumber];
    leiras.innerHTML = leirasok[randomNumber];
    image.src = sources[randomNumber];
}

sorsolButton.addEventListener("click", () => sorsolas())