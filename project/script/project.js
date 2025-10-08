// Footer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.textContent = 'Last Modified: ' + document.lastModified;
    }

    // Mobile menu functionality
    const menuBtn = document.getElementById('menuBtn');
    const mainNav = document.getElementById('mainNav');

    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change button text based on menu state
            if (mainNav.classList.contains('active')) {
                menuBtn.innerHTML = '&#10005;'; // X symbol
                menuBtn.setAttribute('aria-label', 'Close navigation');
            } else {
                menuBtn.innerHTML = '&#9776;'; // Hamburger icon
                menuBtn.setAttribute('aria-label', 'Open navigation');
            }
        });

        // Close menu when clicking on a link (for mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    menuBtn.innerHTML = '&#9776;';
                    menuBtn.setAttribute('aria-label', 'Open navigation');
                }
            });
        });

        // Close menu when clicking outside (for mobile)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768 && 
                mainNav.classList.contains('active') &&
                !menuBtn.contains(event.target) && 
                !mainNav.contains(event.target)) {
                mainNav.classList.remove('active');
                menuBtn.innerHTML = '&#9776;';
                menuBtn.setAttribute('aria-label', 'Open navigation');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});