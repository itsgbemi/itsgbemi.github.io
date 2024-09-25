document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formResponse = document.getElementById('formResponse');

  // Form validation
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Clear previous errors
    clearErrors();

    // Validate the form
    if (validateForm()) {
      submitForm();
    }
  });

  // Form validation logic
  function validateForm() {
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
      displayError('nameError', 'Please enter your name.');
      valid = false;
    }

    if (!validateEmail(email.value.trim())) {
      displayError('emailError', 'Please enter a valid email address.');
      valid = false;
    }

    if (!message.value.trim()) {
      displayError('messageError', 'Please enter a message.');
      valid = false;
    }

    return valid;
  }

  // Email validation (simple regex)
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Error display helper
  function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }

  // Clear all errors
  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  }

  // Submit the form via AJAX
  function submitForm() {
    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbxoU1PG5FTtShQO49UESKz8oVjUwW3tbXlD26ETEfHdAmJDXGdL8VuMvvV1ub8AxtSV/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        formResponse.textContent = 'Message sent successfully!';
        formResponse.classList.remove('error'); // Remove error class if it was present
        formResponse.classList.add('success'); // Add success class for styling
        form.reset(); // Reset the form after successful submission
      })
      .catch(error => {
        formResponse.textContent = 'There was an error submitting your message.';
        formResponse.classList.remove('success'); // Remove success class if it was present
        formResponse.classList.add('error'); // Add error class for styling
      });
  }
});
