
//23456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567 |


/* The following belongs to the language button (språkknappen) and translation in the navigational menu. */


/*
function updateLanguage(lang) {
  document.querySelectorAll("[data-sv][data-en]").forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  // Uppdatera knappen
  const toggleButton = document.getElementById("language-toggle");
  toggleButton.textContent = lang === "sv" ? "English" : "Svenska";
}

// Läs språkinställning från localStorage eller default till svenska
let currentLanguage = localStorage.getItem("language") || "sv";
updateLanguage(currentLanguage);

// När användaren klickar på knappen
document.getElementById("language-toggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "sv" ? "en" : "sv";
  localStorage.setItem("language", currentLanguage);
  updateLanguage(currentLanguage);
});
*/





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








/* The following belongs to the image transitioning slide show (bildspelet) on the index.html page. */

let slideWithCaptionBoxes = document.querySelectorAll('.slideWithCaptionBox'); // all elements of this class
let currentSlideWithCaption = 0;
let interval = null;
let paused = false;

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



/* The following belongs to the AktuellUtställning.html. */
/*
        const modal = document.getElementById("quiz-modal");
        const openBtn = document.getElementById("open-quiz-btn");
        const closeBtn = document.querySelector(".close");

        openBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

        document.getElementById("quiz-form").addEventListener("submit", function(event) {
            event.preventDefault();

            const answers = {
                q1: "b",
                q2: "b"
            };

            let score = 0;
            for (let q in answers) {
                const selected = document.querySelector(`input[name="${q}"]:checked`);
                if (selected && selected.value === answers[q]) score++;
            }

            const result = document.getElementById("quiz-result");
            result.textContent = `Du fick ${score} av ${Object.keys(answers).length} rätt!`;
        });

*/

/* The following belongs to the konstverk1.html, konstverk2.html, konstverk3.html, konstverk4.html, konstverk5.html, and konstverk6.html. */
/*
    let currentIndex = 0;

    const slideshowImage = document.getElementById("slideshow-image");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
    const imageCounter = document.getElementById("image-counter");
    const imageCaption = document.getElementById("image-caption");

    function updateImage() {
        slideshowImage.src = images[currentIndex].src;
        imageCounter.textContent = `${currentIndex + 1}/${images.length}`;
        const caption = images[currentIndex].caption;
        imageCaption.textContent = caption;
        imageCaption.style.display = caption ? "block" : "none";
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    updateImage();
*/



