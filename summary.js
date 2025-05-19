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

function previewSummary() {
    const reflections = document.getElementById('reflection-input')?.value.trim();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || [];
    const uploadedImages = JSON.parse(localStorage.getItem("uploadedImages")) || [];

    const hasReflections = reflections && reflections.length > 0;
    const hasUploads = uploadedImages.length > 0;
    const userTitle = generateUserTitle(favorites.length, visitedPages.length, reflections);

    const content = `
        <html>
        <head>
            <title>Din Personliga Summering</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: #ffffff;
                    color: #333;
                    padding: 40px;
                    max-width: 800px;
                    margin: auto;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    line-height: 1.6;
                }

                h1, h2 {
                    text-align: center;
                    border-bottom: 2px solid #ccc;
                    padding-bottom: 6px;
                    margin-top: 40px;
                }

                ul {
                    padding-left: 20px;
                }

                .favorite-artworks {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    margin-top: 20px;
                }

                .favorite-artwork {
                    width: 200px;
                    text-align: center;
                }

                .favorite-artwork img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                }

                .uploaded-image-wrapper {
                    margin: 20px 0;
                    text-align: center;
                }

                .uploaded-image-wrapper img {
                    max-height: 180px;
                    max-width: 100%;
                    border-radius: 8px;
                }

                p {
                    margin-bottom: 1em;
                }

                @media print {
                    body {
                        margin: 0;
                        box-shadow: none;
                    }
                }
            </style>
        </head>
        <body>
            <h1>Din personliga summering</h1>
            <p style="text-align:center; font-style: italic; font-size: 1.1em; margin-bottom: 2em;">
            ${userTitle}
            </p>

            <h2>🖼 Besökta sidor</h2>
            <ul>${visitedPages.map(page => `<li>${page}</li>`).join("")}</ul>

            <h2>❤️ Dina favoritkonstverk</h2>
            ${favorites.length > 0 ? `
                <div class="favorite-artworks">
                    ${favorites.map(fav => `
                        <div class="favorite-artwork">
                            <img src="${fav.image}" alt="${fav.title}">
                            <h3>${fav.title}</h3>
                            <p><strong>Av:</strong> ${fav.artist} (${fav.year})</p>
                        </div>
                    `).join("")}
                </div>
            ` : "<p>Inga favoriter tillagda.</p>"}

            ${hasReflections ? `
                <h2>📝 Dina reflektioner</h2>
                <p>${reflections.replace(/\n/g, "<br>")}</p>
            ` : ""}

            ${hasUploads ? `
                <h2>📷 Dina egna bilder</h2>
                <div class="favorite-artworks">
                    ${uploadedImages.map(img => `
                        <div class="favorite-artwork">
                            <img src="${img}" alt="Uppladdad bild">
                        </div>
                    `).join("")}
                </div>
            ` : ""}
        </body>
        </html>
    `;

    const previewWindow = window.open("", "_blank");
    previewWindow.document.write(content);
    previewWindow.document.close();
}

function generateUserTitle(favCount, visitCount, reflections) {
    if (favCount > 4 && reflections) {
        return "🎨 Den passionerade konstentusiasten";
    } else if (favCount > 4) {
        return "❤️ Den som älskar många bilder";
    } else if (reflections && reflections.length > 50) {
        return "📝 Den eftertänksamma betraktaren";
    } else if (visitCount > 5) {
        return "🌍 Den nyfikne upptäckaren";
    } else if (favCount === 0 && !reflections) {
        return "🕵️ Den diskreta utforskaren";
    } else {
        return "🎭 Konstälskare med personlig smak";
    }
}
