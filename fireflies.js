document.addEventListener("DOMContentLoaded", function() {
    const numberOfFireflies = 40;
    const container = document.getElementById('fireflies-container') || document.createElement('div');
    
    if (!document.getElementById('fireflies-container')) {
        container.id = 'fireflies-container';
        document.body.appendChild(container);
    }

    // Clear any existing fireflies
    container.innerHTML = '';

    // Create fireflies with different sizes and colors
    for (let i = 0; i < numberOfFireflies; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        container.appendChild(firefly);
        
        // Randomize initial position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        firefly.style.transform = `translate(${x}vw, ${y}vh)`;
        
        animateFirefly(firefly);
    }

    function animateFirefly(firefly) {
        // Randomize firefly properties
        const size = Math.random() * 4 + 2;
        const blinkDelay = Math.random() * 3;
        const animationDuration = Math.random() * 2 + 3;
        const zIndex = Math.floor(Math.random() * 10) - 5;
        
        // Apply random color variation (teal to cyan to light blue)
        const hue = Math.floor(Math.random() * 40) + 170; // 170-210 range (cyan to blue)
        const saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
        const lightness = Math.floor(Math.random() * 20) + 70; // 70-90%
        
        // Set firefly styles
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.animationDelay = `${blinkDelay}s`;
        firefly.style.animationDuration = `${animationDuration}s`;
        firefly.style.zIndex = zIndex;
        firefly.style.boxShadow = `0 0 ${size * 3}px ${size}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;

        // Create smoother, more natural movement
        function moveFirefly() {
            const currentX = parseFloat(firefly.style.transform.split('(')[1].split('vw')[0]);
            const currentY = parseFloat(firefly.style.transform.split(', ')[1].split('vh')[0]);
            
            // Create a more natural movement by limiting the distance
            const maxDistance = 15; // Maximum distance to move
            
            // Calculate new position with limited movement range
            let newX = currentX + (Math.random() * maxDistance * 2 - maxDistance);
            let newY = currentY + (Math.random() * maxDistance * 2 - maxDistance);
            
            // Keep fireflies within the viewport bounds with padding
            newX = Math.max(0, Math.min(100, newX));
            newY = Math.max(0, Math.min(100, newY));
            
            // Set movement duration based on distance (further = slower)
            const distance = Math.sqrt(Math.pow(newX - currentX, 2) + Math.pow(newY - currentY, 2));
            const duration = (distance / maxDistance) * 5 + 3; // 3-8 seconds
            
            // Apply the transition and transform
            firefly.style.transition = `transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
            firefly.style.transform = `translate(${newX}vw, ${newY}vh)`;
            
            // Schedule next movement
            setTimeout(moveFirefly, duration * 1000);
        }

        // Start movement with a random delay
        setTimeout(moveFirefly, Math.random() * 2000);
    }
});
