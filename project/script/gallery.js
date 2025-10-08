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

    // Gallery filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Open modal when view button is clicked
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const galleryItem = this.closest('.gallery-item');
            const imgSrc = galleryItem.querySelector('img').src;
            const caption = galleryItem.querySelector('.caption').textContent;
            
            modalImage.src = imgSrc;
            modalCaption.textContent = caption;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate gallery items on load
        galleryItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
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