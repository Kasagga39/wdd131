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

    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate contact cards on load
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Animate form on load
        const formContainer = document.querySelector('.form-container');
        if (formContainer) {
            formContainer.style.opacity = '0';
            formContainer.style.transform = 'translateX(20px)';
            setTimeout(() => {
                formContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                formContainer.style.opacity = '1';
                formContainer.style.transform = 'translateX(0)';
            }, 300);
        }
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