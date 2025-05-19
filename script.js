/* Relaterat till språkknappen */

function updateLanguage(lang) {
  document.querySelectorAll("[data-sv][data-en]").forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  const toggleButton = document.getElementById("language-toggle");
  if (toggleButton) {
    toggleButton.textContent = lang === "sv" ? "English" : "Svenska";
  }
}

function initLanguageToggle() {
  // Läs språkinställning från localStorage eller default till svenska
  let currentLanguage = localStorage.getItem("language") || "sv";
  updateLanguage(currentLanguage);

  const toggleButton = document.getElementById("language-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      currentLanguage = currentLanguage === "sv" ? "en" : "sv";
      localStorage.setItem("language", currentLanguage);
      updateLanguage(currentLanguage);
    });
  }
}

window.addEventListener("DOMContentLoaded", initLanguageToggle);


/* Relaterat till bildspelet på startsidan */

let slideWithCaptionBoxes = document.querySelectorAll('.slideWithCaptionBox');
let currentSlideWithCaption = 0;
let interval = null;
let paused = false;

/* Relaterat till storleken på slideshowBox-elementet */
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