// Set the date we're counting down to
const countdownDate = new Date("Dec 15, 2024 00:00:00").getTime();

// Function to add a leading zero to numbers less than 10
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Function to update countdown
function updateCountdown() {
    // Get the current time
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));

    // Update the countdown in a single DOM manipulation
    document.querySelector('.countdown').innerHTML = `
        <div class="countdown-box">
            <div id="days" class="countdown-time">${days}</div>
            <div class="countdown-label">DAYS</div>
        </div>
        <div class="countdown-box">
            <div id="hours" class="countdown-time">${hours}</div>
            <div class="countdown-label">HOURS</div>
        </div>
        <div class="countdown-box">
            <div id="minutes" class="countdown-time">${minutes}</div>
            <div class="countdown-label">MINUTES</div>
        </div>
        <div class="countdown-box">
            <div id="seconds" class="countdown-time">${seconds}</div>
            <div class="countdown-label">SECONDS</div>
        </div>
    `;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}

// Update the countdown every 1 second
const timerInterval = setInterval(updateCountdown, 1000);
