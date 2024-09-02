// Set the date we're counting down to
const countdownDate = new Date("Sep 15, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const updateCountdown = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = countdownDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements with corresponding IDs
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}, 1000);
