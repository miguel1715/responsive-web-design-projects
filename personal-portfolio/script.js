// The island and its button
const island = document.querySelector(".island");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  // classList.toggle adds the class if it's missing, removes it if it's there,
  // and returns true when the class is now on the element
  const isOpen = island.classList.toggle("is-open");

  // keep the accessibility info in sync with what's on screen
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});


// Add "is-scrolled" to the island and arrow once a mouse scroll happens
const hero = document.querySelector(".hero");

const heroObserver = new IntersectionObserver(
  (entries) => {
    // isIntersecting is true while no scroll happens.
    island.classList.toggle("is-scrolled", !entries[0].isIntersecting);
  },
  { threshold: 1 }   // fires when the scroll happens
);

heroObserver.observe(hero);


// Close the island when a link inside it is clicked, or when Escape is pressed
function closeIsland() {
  island.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
}

// every link inside the island closes it when clicked
island.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeIsland);
});


// ABOUT PHOTO: fades in / lights up once, when it scrolls into view
const aboutPhoto = document.querySelector(".about-photo");

const photoObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      aboutPhoto.classList.add("is-visible"); 
      photoObserver.disconnect();   //  the effect only plays once
    }
  },
  { threshold: 0.5 }   // fires when 50% of the photo is visible
);

photoObserver.observe(aboutPhoto);


// THEME TOGGLE: the bulb button flips data-theme on <html>
const themeButton = document.querySelector(".theme-toggle");
const rootEl = document.documentElement;   // the <html> element, where the CSS looks for data-theme

themeButton.addEventListener("click", () => {
  // no attribute yet means light, so "not dark" covers the first click too
  const goingDark = rootEl.dataset.theme !== "dark";

  // dataset.theme reads and writes the data-theme attribute
  rootEl.dataset.theme = goingDark ? "dark" : "light";

  // the label always names what the next click will do
  themeButton.setAttribute("aria-label", goingDark ? "Switch to light theme" : "Switch to dark theme");

  if (goingDark) {
    const photo = document.querySelector(".about-photo");
    photo.classList.remove("is-visible");   // reset, so the flicker animation can start over
    photoObserver.observe(photo);           // watch it again: if it's on screen, the observer adds is-visible
  }
});