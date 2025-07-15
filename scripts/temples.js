
const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('primaryNav');

hamburger.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
    
    if (primaryNav.classList.contains('active')) {
        hamburger.innerHTML = '✕';
    } else {
        hamburger.innerHTML = '☰';
    }
});


const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;