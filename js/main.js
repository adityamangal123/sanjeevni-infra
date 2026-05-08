const menuButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector(".nav-links");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));
}

const yearEl = document.querySelector("[data-year]");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const pageKey = document.body.dataset.page;
if (pageKey) {
  const activeLink = document.querySelector(`.nav-links a[data-page="${pageKey}"]`);
  if (activeLink) activeLink.classList.add("active");
}

const waButton = document.querySelector(".wa-float");
const footer = document.querySelector("footer");
if (waButton && footer && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry) return;
      waButton.classList.toggle("is-hidden", entry.isIntersecting);
    },
    { threshold: 0.05 }
  );
  observer.observe(footer);
}
