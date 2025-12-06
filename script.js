// DARK MODE TOGGLE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Close mobile menu when clicking link
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("show"));
});
function showSection(sectionId) {
  // Hide all sections
  // Show only the clicked section
}
