// === ScrollReveal Animations ===
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1000,
  delay: 100
});

// Reveal animations for elements from the top
ScrollReveal().reveal('.hero-box, .main-text, .gallery h2, .media h2, .contact-text, .contact-form, .bio-text, .opportunity-content, .awards-list, .proprietor-bio', {
  origin: 'top'
});

// Reveal animations for elements from the bottom
ScrollReveal().reveal('.about-img, .gallery-grid img, .media-item, .service-box .box, .split-box, .proprietor-image', {
  origin: 'bottom',
  interval: 200
});

// === Map Toggle Function ===
function toggleMap() {
  const mapBox = document.getElementById("mapBox");
  if (mapBox.classList.contains("show-map")) {
    mapBox.classList.remove("show-map");
    mapBox.classList.add("hide-map");
  } else {
    mapBox.classList.remove("hide-map");
    mapBox.classList.add("show-map");
  }
}

// === Mobile Navigation Menu Toggle ===
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}