// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    navLinks.classList.remove("show"); // tutup menu setelah klik
  });
});

// Form kontak (opsional)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Pesan terkirim! (Ini simulasi saja)");
  e.target.reset();
});
