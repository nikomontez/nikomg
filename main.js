const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navLinks = document.querySelectorAll(".primary-navigation a"); // Select all nav links


navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute("data-visible");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (primaryNav.hasAttribute('data-visible')) {
            primaryNav.removeAttribute("data-visible");
            navToggle.setAttribute('aria-expanded', false);
        }
    });
});