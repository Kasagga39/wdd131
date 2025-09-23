// Temple Data Array (including 3 new ones)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- New Temple Objects Below ---
  {
    templeName: "Kampala Uganda",
    location: "Kampala, Uganda",
    dedicated: "2024, March, 16",
    area: 8900,
    imageUrl: "images/Kampala-Uganda-Temple.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 18900,
    imageUrl: "images/Johannesburg-South-Africa.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "images/Rome-Italy-Temple.jpg"
  }
];

// HTML container where cards will be placed
const main = document.querySelector("main");

// Utility: Parse year from dedicated date string
function getDedicatedYear(dateStr) {
  return parseInt(dateStr.split(",")[0]);
}

// Utility: Clear current temple cards
function clearTemples() {
  main.innerHTML = "<h1>Temple</h1><h2>Filtered</h2>";
}

// Utility: Create a single temple card
function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
  `;

  main.appendChild(card);
}

// Render a list of temples
function renderTemples(templesArray) {
  clearTemples();
  templesArray.forEach(createTempleCard);
}

// Filter handlers
function showAll() {
  renderTemples(temples);
}

function showOld() {
  renderTemples(temples.filter(t => getDedicatedYear(t.dedicated) < 1900));
}

function showNew() {
  renderTemples(temples.filter(t => getDedicatedYear(t.dedicated) > 2000));
}

function showLarge() {
  renderTemples(temples.filter(t => t.area > 90000));
}

function showSmall() {
  renderTemples(temples.filter(t => t.area < 10000));
}

// Attach event listeners to nav
document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", (event) => {
    const text = event.target.textContent.toLowerCase();

    switch (text) {
      case "home": showAll(); break;
      case "old": showOld(); break;
      case "new": showNew(); break;
      case "large": showLarge(); break;
      case "small": showSmall(); break;
    }
  });
});

// Initial render
showAll();

// Footer Date Handling
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// Optional: Mobile nav toggle logic
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});
