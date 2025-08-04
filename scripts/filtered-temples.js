const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('primaryNav');
const templeGrid = document.querySelector('.temple-grid');

hamburger.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
    hamburger.innerHTML = primaryNav.classList.contains('active') ? '✕' : '☰';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent += document.lastModified;

// Temple data array
const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "images/temple1.webp"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41010,
        imageUrl: "images/temple2.webp"
    },
    {
        templeName: "Kyiv Ukraine Temple",
        location: "Kyiv, Ukraine",
        dedicated: "2010-08-29",
        area: 22184,
        imageUrl: "images/temple3.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980-10-27",
        area: 53997,
        imageUrl: "images/temple4.jpg"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985-08-24",
        area: 19184,
        imageUrl: "images/temple5.jpg"
    },
    {
        templeName: "Bangkok Thailand Temple",
        location: "Bangkok, Thailand",
        dedicated: "2023-10-22",
        area: 49302,
        imageUrl: "images/temple6.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "2017-05-21",
        area: 44175,
        imageUrl: "images/temple7.jpg"
    },
    {
        templeName: "Washington D.C. Temple",
        location: "Kensington, Maryland, USA",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "images/temple8.jpg"
    },
    {
        templeName: "São Paulo Brazil Temple",
        location: "São Paulo, Brazil",
        dedicated: "1978-10-30",
        area: 59246,
        imageUrl: "images/temple9.jpg"
    }
];

// Function to create temple cards
function createTempleCard(temple) {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    templeGrid.appendChild(figure);
}

// Display temples based on filter
function displayTemples(filter) {
    templeGrid.innerHTML = "";
    let filteredTemples = temples;

    switch (filter) {
        case "old":
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(t => t.area < 10000);
            break;
    }

    filteredTemples.forEach(createTempleCard);
}

// Navigation click events
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        displayTemples(filter);
    });
});

// Initial load
displayTemples("home");
