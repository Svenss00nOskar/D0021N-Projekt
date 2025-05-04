
//23456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567 |

let slideWithCaptionBoxes = document.querySelectorAll('.slideWithCaptionBox'); // all elements of this class
let currentSlideWithCaption = 0;
let interval = null;
let paused = false;

// Bildspelet
//const images = ["renar.jpg", "solnedgang.avif", "gobelang.jpg"];
//let index = 0;

/*
function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("slide-image").src = images[index];
}
*/

//setInterval(changeImage, 3000); // Byt bild var 3:e sekund

// Språkknappen
const langButton = document.getElementById('language-toggle');
langButton.addEventListener('click', () => {
    langButton.textContent = langButton.textContent === "English" ? "Svenska" : "English";
});




/* Sets the size of the slideshowBox (as a function of its contained images of varying sizes).
 */
function resizeOuterToInner() {
  const outer = document.getElementById('slideshowBox');
  const inner = document.querySelector('.slideWithCaptionBox');
  const rect = inner.getBoundingClientRect();

  // Använd storleken på .inner för att sätta outer
  outer.style.width = rect.width + 'px';
  outer.style.height = rect.height + 'px';
}


window.addEventListener('load', resizeOuterToInner);
window.addEventListener('resize', resizeOuterToInner); // Om fönstret ändras


function showSlide(index) {
  slideWithCaptionBoxes.forEach((slideWithCaptionBox, i) => {
    slideWithCaptionBox.classList.toggle('active', i === index);
  });
}


function nextSlide() {
  currentSlideWithCaption = (currentSlideWithCaption + 1) % slideWithCaptionBoxes.length;
  showSlide(currentSlideWithCaption);
}


function startSlideshow() {
  if (!interval) {
    /* ADJUST TIMING HERE! (milliseconds to next slide); not shorter duration
     * than set by the property "transition" in the CSS code!
     */
    interval = setInterval(nextSlide, 3000);
  }
}


function stopSlideshow() {
  clearInterval(interval);
  interval = null;
}


const slideshowBox = document.getElementById('slideshowBox');


slideshowBox.addEventListener('mouseenter', () => {
  if (!paused) stopSlideshow();
});


slideshowBox.addEventListener('mouseleave', () => {
  if (!paused) startSlideshow();
});


slideshowBox.addEventListener('click', () => {
  paused = !paused;
  if (paused) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
});


showSlide(currentSlideWithCaption);
startSlideshow();


