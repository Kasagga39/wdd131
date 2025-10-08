// JavaScript for MJ Electronics Website

// Object containing company information
const companyInfo = {
    name: "MJ Electronics & Energies",
    location: "Masaka City, Uganda",
    services: [
        {
            id: 1,
            name: "Solar Power Systems",
            description: "Complete solar energy solutions for homes and businesses",
            icon: "☀️"
            
        },
        {
            id: 2,
            name: "Inverter Systems",
            description: "Reliable backup power solutions for uninterrupted electricity",
            icon: "⚡"
        },
        {
            id: 3,
            name: "Security Systems",
            description: "Advanced security and surveillance solutions",
            icon: "🔒"
        },
        {
            id: 4,
            name: "Electronic Repairs",
            description: "Expert repair services for all electronic devices",
            icon: "🔧"
        },
        {
            id: 5,
            name: "Energy Consultation",
            description: "Professional advice on energy efficiency and solutions",
            icon: "💡"
        }
    ],
    team: [
        {
            name: "Joseph Mayanja",
            position: "Manager",
            experience: "10+ years"
        },
        {
            name: "Kasagga Frank",
            position: "Assistant Manager",
            experience: "8+ years"
        }
    ]
};

// Array of gallery items
const galleryItems = [
    {
        id: 1,
        title: "Solar Installation - Residential",
        description: "Complete home solar power system",
        category: "solar"
    },
    {
        id: 2,
        title: "Commercial Security System",
        description: "Advanced security setup for business premises",
        category: "security"
    },
    {
        id: 3,
        title: "Inverter Backup System",
        description: "Reliable power backup solution",
        category: "inverter"
    },
    {
        id: 4,
        title: "Energy Consultation Session",
        description: "Professional energy assessment",
        category: "consultation"
    }
];

// Array of testimonials
const testimonials = [
    {
        id: 1,
        name: "Sarah K.",
        text: "MJ Electronics installed a solar system for my home that has cut my electricity bills by 80%. Professional service from start to finish!",
        rating: 5
    },
    {
        id: 2,
        name: "Robert M.",
        text: "The security system they installed has given me peace of mind. The team was knowledgeable and the pricing was fair.",
        rating: 5
    },
    {
        id: 3,
        name: "Grace N.",
        text: "Fast and reliable electronic repair service. My TV was fixed in less than 24 hours. Highly recommended!",
        rating: 4
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    setFooterDates();
    setupMobileMenu();
    populateServices();
    populateGallery();
    populateTestimonials();
    setupContactForm();
    setupGalleryNavigation();
    setupCTAButton();
    loadUserPreferences();
    
    // Add loaded class for animations
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
}

// Function to set footer dates
function setFooterDates() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.textContent = 'Last Modified: ' + formatDate(new Date(document.lastModified));
    }
}

// Function to format dates
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Mobile menu functionality
function setupMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mainNav = document.getElementById('mainNav');

    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu(mainNav, menuBtn);
        });

        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu(mainNav, menuBtn);
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768 && 
                mainNav.classList.contains('active') &&
                !menuBtn.contains(event.target) && 
                !mainNav.contains(event.target)) {
                closeMobileMenu(mainNav, menuBtn);
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu(mainNav, menuBtn);
            }
        });
    }
}

// Function to toggle mobile menu
function toggleMobileMenu(nav, button) {
    const isActive = nav.classList.contains('active');
    
    // Using conditional branching
    if (isActive) {
        closeMobileMenu(nav, button);
    } else {
        openMobileMenu(nav, button);
    }
}

// Function to open mobile menu
function openMobileMenu(nav, button) {
    nav.classList.add('active');
    button.innerHTML = '&#10005;';
    button.setAttribute('aria-label', 'Close navigation');
}

// Function to close mobile menu
function closeMobileMenu(nav, button) {
    nav.classList.remove('active');
    button.innerHTML = '&#9776;';
    button.setAttribute('aria-label', 'Open navigation');
}

// Function to populate services using template literals
function populateServices() {
    const servicesContainer = document.getElementById('servicesContainer');
    
    if (servicesContainer) {
        // Using array method (map) and template literals
        const servicesHTML = companyInfo.services.map(service => {
            return `
                <div class="service-item" data-service-id="${service.id}">
                    <div class="service-icon">${service.icon}</div>
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <button class="service-info-btn" onclick="showServiceDetails(${service.id})">Learn More</button>
                </div>
            `;
        }).join('');
        
        servicesContainer.innerHTML = servicesHTML;
    }
}

// Function to show service details
function showServiceDetails(serviceId) {
    const service = companyInfo.services.find(s => s.id === serviceId);
    
    if (service) {
        alert(`Service: ${service.name}\n\nDescription: ${service.description}`);
        
        // Store user interest in localStorage
        storeUserInterest('service', service.name);
    }
}

// Function to populate gallery
function populateGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    
    if (galleryContainer) {
        // Using array method (forEach) and template literals
        galleryItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="images/project-${item.id}.jpg" alt="${item.title}" loading="lazy">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            `;
            galleryContainer.appendChild(galleryItem);
        });
    }
}

// Function to setup gallery navigation
function setupGalleryNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const galleryContainer = document.getElementById('galleryContainer');
    
    if (galleryContainer && prevBtn && nextBtn) {
        let currentIndex = 0;
        const items = galleryContainer.children;
        const totalItems = items.length;
        
        // Function to update gallery display
        function updateGallery() {
            // Hide all items
            Array.from(items).forEach(item => {
                item.style.display = 'none';
            });
            
            // Show current item
            if (items[currentIndex]) {
                items[currentIndex].style.display = 'block';
            }
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === totalItems - 1;
        }
        
        // Event listeners for navigation
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateGallery();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
                updateGallery();
            }
        });
        
        // Initialize gallery
        updateGallery();
    }
}

// Function to populate testimonials
function populateTestimonials() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    
    if (testimonialsContainer) {
        // Using template literals and array method (map)
        const testimonialsHTML = testimonials.map(testimonial => {
            const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
            
            return `
                <div class="testimonial">
                    <div class="testimonial-text">${testimonial.text}</div>
                    <div class="testimonial-author">- ${testimonial.name}</div>
                    <div class="testimonial-rating">${stars}</div>
                </div>
            `;
        }).join('');
        
        testimonialsContainer.innerHTML = testimonialsHTML;
    }
}

// Function to setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(contactForm);
        });
        
        // Load saved form data if available
        loadFormData(contactForm);
        
        // Save form data on input change
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                saveFormData(contactForm);
            });
        });
    }
}

// Function to handle form submission
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const formObject = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Validate form
    if (validateForm(formObject)) {
        // Process form submission
        processFormSubmission(formObject, form);
    } else {
        showFormStatus('Please fill in all required fields correctly.', 'error');
    }
}

// Function to validate form data
function validateForm(formData) {
    // Check required fields
    if (!formData.name || !formData.email || !formData.message) {
        return false;
    }
    
    // Validate email format using conditional branching
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        return false;
    }
    
    return true;
}

// Function to process form submission
function processFormSubmission(formData, form) {
    // Simulate form submission
    showFormStatus('Thank you for your message! We will get back to you soon.', 'success');
    
    // Store submission in localStorage
    storeFormSubmission(formData);
    
    // Clear form and saved data
    form.reset();
    localStorage.removeItem('mjElectronicsFormData');
    
    // Store user interest
    if (formData.service) {
        storeUserInterest('contact', formData.service);
    }
    
    if (formData.newsletter) {
        storeUserInterest('newsletter', 'subscribed');
    }
}

// Function to show form status
function showFormStatus(message, type) {
    // Remove existing status messages
    const existingStatus = document.querySelector('.form-status');
    if (existingStatus) {
        existingStatus.remove();
    }
    
    // Create new status message
    const statusDiv = document.createElement('div');
    statusDiv.className = `form-status ${type}`;
    statusDiv.textContent = message;
    
    // Insert before form
    const form = document.getElementById('contactForm');
    if (form) {
        form.insertBefore(statusDiv, form.firstChild);
        
        // Remove status after 5 seconds
        setTimeout(() => {
            statusDiv.remove();
        }, 5000);
    }
}

// Function to save form data to localStorage
function saveFormData(form) {
    const formData = new FormData(form);
    const formObject = {};
    
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    localStorage.setItem('mjElectronicsFormData', JSON.stringify(formObject));
}

// Function to load form data from localStorage
function loadFormData(form) {
    const savedData = localStorage.getItem('mjElectronicsFormData');
}
    
    if (savedData) {
        const formObject = JSON.parse(savedData)
    }