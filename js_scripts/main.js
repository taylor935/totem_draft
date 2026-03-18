// ===== Mobile Nav Drawer with Hamburger Rotation =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Function to hide nav
function hideNav() {
    navLinks.classList.remove('showing');
    navLinks.classList.add('hiding');
    navLinks.addEventListener('animationend', () => {
        navLinks.classList.remove('hiding');
        navLinks.style.display = 'none';
    }, { once: true });

    // Rotate hamburger back
    menuToggle.classList.remove('active');
}

// Toggle menu
menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('showing')) {
        hideNav();
    } else {
        navLinks.style.display = 'flex';
        navLinks.classList.remove('hiding');
        navLinks.classList.add('showing');

        // Rotate hamburger 90°
        menuToggle.classList.add('active');
    }
});

// Close menu when clicking any link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('showing')) {
            hideNav();
        }
    });
});

// Restore desktop nav on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        navLinks.style.display = ''; // remove inline style
        navLinks.classList.remove('showing', 'hiding');

        // Reset hamburger rotation
        menuToggle.classList.remove('active');
    }
});