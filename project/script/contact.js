// Set current year and last modified date in footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuBtn.setAttribute('aria-label', 
            mainNav.classList.contains('active') ? 'Close navigation' : 'Open navigation'
        );
    });
}

// Local Storage functionality for contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    // Form field IDs to save in local storage
    const formFields = ['name', 'email', 'phone', 'service', 'message'];
    const storageKey = 'mjElectronicsContactForm';

    // Load saved form data from local storage
    function loadFormData() {
        try {
            const savedData = localStorage.getItem(storageKey);
            if (savedData) {
                const formData = JSON.parse(savedData);
                formFields.forEach(field => {
                    const element = document.getElementById(field);
                    if (element && formData[field]) {
                        element.value = formData[field];
                    }
                });
                console.log('Form data loaded from local storage');
            }
        } catch (error) {
            console.error('Error loading form data from local storage:', error);
        }
    }

    // Save form data to local storage
    function saveFormData() {
        try {
            const formData = {};
            formFields.forEach(field => {
                const element = document.getElementById(field);
                if (element) {
                    formData[field] = element.value;
                }
            });
            localStorage.setItem(storageKey, JSON.stringify(formData));
        } catch (error) {
            console.error('Error saving form data to local storage:', error);
        }
    }

    // Auto-save form data when user types (with debouncing)
    let saveTimeout;
    function autoSaveFormData() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(saveFormData, 500); // Save after 500ms of inactivity
    }

    // Clear form data from local storage
    function clearFormData() {
        try {
            localStorage.removeItem(storageKey);
            console.log('Form data cleared from local storage');
        } catch (error) {
            console.error('Error clearing form data from local storage:', error);
        }
    }

    // Add event listeners to form fields for auto-save
    formFields.forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            element.addEventListener('input', autoSaveFormData);
            element.addEventListener('change', autoSaveFormData);
        }
    });

    // Load saved data when page loads
    loadFormData();

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        let isValid = true;
        const requiredFields = ['name', 'email', 'message'];
        
        requiredFields.forEach(field => {
            const element = document.getElementById(field);
            if (element && !element.value.trim()) {
                isValid = false;
                highlightField(element, true);
            } else {
                highlightField(element, false);
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields (Name, Email, and Message).');
            return;
        }

        // Here you would typically send the form data to your server
        // For now, we'll simulate form submission
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Clear form data from local storage after successful submission
            clearFormData();
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
        }, 1500);
    });

    // Function to highlight fields with errors
    function highlightField(element, hasError) {
        if (!element) return;
        
        if (hasError) {
            element.style.borderColor = '#ff4444';
            element.style.backgroundColor = '#fff8f8';
        } else {
            element.style.borderColor = '';
            element.style.backgroundColor = '';
        }
    }

    // Optional: Add a reset button to clear both form and local storage
    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.textContent = 'Clear Form';
    resetButton.className = 'reset-btn';
    resetButton.style.marginTop = '10px';
    resetButton.style.marginLeft = '10px';
    resetButton.style.padding = '10px 15px';
    resetButton.style.backgroundColor = '#6c757d';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '5px';
    resetButton.style.cursor = 'pointer';
    
    resetButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear the form? All entered data will be lost.')) {
            contactForm.reset();
            clearFormData();
            alert('Form cleared successfully.');
        }
    });

    // Add reset button after submit button
    const submitBtn = contactForm.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.parentNode.appendChild(resetButton);
    }

    // Optional: Auto-save notification
    const autoSaveNotice = document.createElement('div');
    autoSaveNotice.textContent = '✓ Form auto-saved locally';
    autoSaveNotice.style.fontSize = '12px';
    autoSaveNotice.style.color = '#28a745';
    autoSaveNotice.style.marginTop = '5px';
    autoSaveNotice.style.display = 'none';
    
    contactForm.appendChild(autoSaveNotice);

    // Show auto-save notification temporarily
    let noticeTimeout;
    function showAutoSaveNotice() {
        autoSaveNotice.style.display = 'block';
        clearTimeout(noticeTimeout);
        noticeTimeout = setTimeout(() => {
            autoSaveNotice.style.display = 'none';
        }, 2000);
    }

    // Update auto-save to show notification
    const originalAutoSave = autoSaveFormData;
    autoSaveFormData = function() {
        originalAutoSave();
        showAutoSaveNotice();
    };
});

// Handle page visibility changes to ensure data is saved
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        // Save form data when user leaves the page
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            const saveFormData = () => {
                const formFields = ['name', 'email', 'phone', 'service', 'message'];
                const storageKey = 'mjElectronicsContactForm';
                const formData = {};
                
                formFields.forEach(field => {
                    const element = document.getElementById(field);
                    if (element) {
                        formData[field] = element.value;
                    }
                });
                
                try {
                    localStorage.setItem(storageKey, JSON.stringify(formData));
                } catch (error) {
                    console.error('Error auto-saving form data:', error);
                }
            };
            
            saveFormData();
        }
    }
});