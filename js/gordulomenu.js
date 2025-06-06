const menu = document.getElementById("cars");
const image = document.getElementById("image");

menu.onchange = function() {
    image.src = menu.value;
}