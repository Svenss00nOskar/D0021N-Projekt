// Hämta tidigare besökta sidor från localStorage
let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];

// Lägg till den aktuella sidans titel eller URL om den inte redan finns
const currentPage = document.title || window.location.pathname;

if (currentPage != "Besökssummering") {
  if (!visitedPages.includes(currentPage)) {
    visitedPages.push(currentPage);
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
  }
}

// Funktion för att hämta besökssammanfattning (om du vill använda)
function getVisitSummary() {
  return JSON.parse(localStorage.getItem('visitedPages')) || [];
}