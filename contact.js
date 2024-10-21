        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuToggle.addEventListener('click', () => {
            const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuToggle.setAttribute('aria-expanded', !expanded);
            mobileMenu.setAttribute('aria-hidden', expanded);
        });
        
  // Handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    // Form validation
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting traditionally

        // Clear previous errors
        clearErrors();

        // Validate the form
        if (validateForm()) {
            submitForm(); // Submit the form via AJAX if valid
        }
    });

    // Client-side form validation
    function validateForm() {
        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Name validation
        if (!name.value.trim()) {
            displayError('nameError', 'Please enter your name.');
            valid = false;
        }

        // Email validation
        if (!validateEmail(email.value.trim())) {
            displayError('emailError', 'Please enter a valid email address.');
            valid = false;
        }

        // Message validation
        if (!message.value.trim()) {
            displayError('messageError', 'Please enter a message.');
            valid = false;
        }

        return valid; // Return false if validation fails, preventing submission
    }

    // Email validation using regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Display error message helper
    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    // Clear all error messages
    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    }

    // Submit the form via AJAX to Google Apps Script
    function submitForm() {
        const formData = new FormData(form);

        fetch('https://script.google.com/macros/s/AKfycbwarIg5kbpdSzNYkpEeTWzE_HR96VZaCpnwCYncv5MDJpzL4PWdYrGv0dH4TTSJGjRE/exec', { // Replace with your actual script URL
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            formResponse.textContent = 'Message sent successfully!';
            formResponse.classList.remove('error');
            formResponse.classList.add('success');
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => {
            formResponse.textContent = 'There was an error submitting your message.';
            formResponse.classList.remove('success');
            formResponse.classList.add('error');
        });
    }
});
