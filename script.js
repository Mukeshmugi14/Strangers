let lastScrollY = window.scrollY; // Track the last scroll position
const navbar = document.getElementById('desktop-nav'); // Get the navbar element
const hambar = document.getElementById('hamburg-nav');
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.style.transform = 'translate(1000%)'; // Hide the navbar
        hambar.style.transform = 'translate(1000%)'; // Hide the navbar
    } else {
        // Scrolling up
        navbar.style.transform = 'translate(0)';
        navbar.style.transform = 'translateX(-50%)'; // Show the navbar
        hambar.style.transform = 'translate(0)';
        hambar.style.transform = 'translateX(-50%)'; // Show the navbar
    }

    lastScrollY = currentScrollY; // Update the last scroll position
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburg-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

// Reveal animations for various sections
sr.reveal('.about, .services-list , .about-strangers', {
    delay: 200
});
sr.reveal('.Events, .title, .card__article', {
    delay: 400
});
sr.reveal('.prv-projects, .projects , .project-item', {
    interval: 200
});
sr.reveal('.footer , .footer-content, .container , .card', {
    interval: 200
});