// Array of image objects
const galleryImages = [
  {
    src: 'images/planting-day.png',
    alt: 'Volunteers planting seeds in the garden',
    caption: 'Community Planting Day - August 2025'
  },
  {
    src: 'images/workshop.jpeg',
    alt: 'Workshop attendees learning composting techniques',
    caption: 'Composting Workshop - September 2025'
  },
  {
    src: 'images/harvest.jpeg',
    alt: 'Fresh vegetables harvested from the garden',
    caption: 'Fresh Harvest - October 2025'
  }
];

// Reference to gallery container element
const galleryContainer = document.getElementById('gallery-container');

function createGalleryItem(image) {
  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  img.loading = 'lazy';

  const caption = document.createElement('figcaption');
  caption.textContent = image.caption;

  figure.appendChild(img);
  figure.appendChild(caption);

  return figure;
}

function populateGallery() {
  galleryImages.forEach(image => {
    const galleryItem = createGalleryItem(image);
    galleryContainer.appendChild(galleryItem);
  });
}

populateGallery();
