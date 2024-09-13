document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { day: 'mon', amount: 17.45 },
        { day: 'tue', amount: 34.91 },
        { day: 'wed', amount: 52.36 },
        { day: 'thu', amount: 31.07 },
        { day: 'fri', amount: 23.39 },
        { day: 'sat', amount: 43.28 },
        { day: 'sun', amount: 25.48 }
    ];

    // Get the maximum amount to normalize the bar heights
    const maxAmount = Math.max(...data.map(d => d.amount));

    // Render the bars
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const amount = parseFloat(bar.getAttribute('data-amount'));
        const height = (amount / maxAmount) * 100; // Normalize height based on max amount
        bar.style.height = `${height}%`; // Set height as percentage
    });
});
