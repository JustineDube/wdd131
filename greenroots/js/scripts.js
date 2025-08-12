// Garden tips object array
const gardenTips = [
  { id: 1, tip: "Water your plants early in the morning to reduce evaporation." },
  { id: 2, tip: "Use compost to enrich your soil naturally." },
  { id: 3, tip: "Plant native species to support local pollinators." },
  { id: 4, tip: "Rotate your crops yearly to prevent soil depletion." },
  { id: 5, tip: "Mulch around plants to retain moisture and suppress weeds." }
];

// LocalStorage key
const TIP_KEY = 'lastGardenTip';

// DOM elements
const tipText = document.getElementById('tip-text');
const newTipBtn = document.getElementById('new-tip-btn');

function getRandomTip() {
  const index = Math.floor(Math.random() * gardenTips.length);
  return gardenTips[index];
}

function displayTip() {
  let tipObj;

  // Check localStorage for last tip
  const savedTipId = localStorage.getItem(TIP_KEY);
  if (savedTipId) {
    tipObj = gardenTips.find(t => t.id === parseInt(savedTipId));
  }

  if (!tipObj) {
    tipObj = getRandomTip();
    localStorage.setItem(TIP_KEY, tipObj.id);
  }

  tipText.textContent = tipObj.tip;
}

function newTip() {
  let tipObj;
  do {
    tipObj = getRandomTip();
  } while (tipObj.tip === tipText.textContent); // avoid repeat

  tipText.textContent = tipObj.tip;
  localStorage.setItem(TIP_KEY, tipObj.id);
}

// FAQ accordion
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);

    const answer = document.getElementById(button.getAttribute('aria-controls'));
    if (answer) {
      if (expanded) {
        answer.hidden = true;
      } else {
        answer.hidden = false;
      }
    }
  });
});

// Event countdown
const countdownTimer = document.getElementById('countdown-timer');
// Example next planting day: Aug 25, 2025 9:00 AM
const nextPlantingDate = new Date('August 25, 2025 09:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = nextPlantingDate - now;

  if (diff <= 0) {
    countdownTimer.textContent = 'The planting day is today!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

newTipBtn.addEventListener('click', newTip);

displayTip();
updateCountdown();
setInterval(updateCountdown, 1000);
