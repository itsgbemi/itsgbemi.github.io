// Add fade-in effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

// Add fade-out effect when navigating to a new page
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent instant navigation

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = this.href;
        }, 500); // Adjust timing to match the fade-out transition duration
    });
});
