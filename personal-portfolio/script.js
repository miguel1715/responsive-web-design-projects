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