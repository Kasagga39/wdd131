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

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate sections on load
        const sections = document.querySelectorAll('.hero-section, .mission-vision, .about-content, .services-section, .purpose-section, .team-section');
        
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
        
        // Animate cards individually
        const cards = document.querySelectorAll('.card, .service-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 600 + (index * 100));
        });
    });

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
});