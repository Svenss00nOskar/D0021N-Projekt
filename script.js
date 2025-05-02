// Bildspelet
const images = ["renar.jpg", "solnedgang.avif", "gobelang.jpg"];
let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("slide-image").src = images[index];
}

setInterval(changeImage, 3000); // Byt bild var 3:e sekund

// Språkknappen
const langButton = document.getElementById('language-toggle');
langButton.addEventListener('click', () => {
    langButton.textContent = langButton.textContent === "English" ? "Svenska" : "English";
});
