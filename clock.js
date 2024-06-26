
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
        hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
    });
    const formattedDate = now.toLocaleDateString('en-US');
    clockElement.textContent = `${formattedDate}, ${formattedTime}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
// Initialize the clock immediately
updateClock();
