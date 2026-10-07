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


// Add "is-scrolled" to the island once the hero has mostly left the screen
const hero = document.querySelector(".hero");

const heroObserver = new IntersectionObserver(
  (entries) => {
    // isIntersecting is true while enough of the hero is still visible.
    // classList.toggle with a second argument forces the class on (true) or off (false).
    island.classList.toggle("is-scrolled", !entries[0].isIntersecting);
  },
  { threshold: 1 }   // fires when the hero crosses the 50% visible mark; change to taste
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