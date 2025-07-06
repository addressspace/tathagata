document.addEventListener("DOMContentLoaded", function() {
    const numberOfFireflies = 50;
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
        const size = Math.random() * 5 + 2;
        const blinkDelay = Math.random() * 3;
        const animationDuration = Math.random() * 3 + 3;
        const zIndex = Math.floor(Math.random() * 10) - 5;
        
        // Get theme state
        const isDarkTheme = document.body.classList.contains('dark-theme');
        
        // Apply random color variation based on theme
        let hue, saturation, lightness;
        
        if (isDarkTheme) {
            // Teal to cyan to light blue for dark theme
            hue = Math.floor(Math.random() * 40) + 170; // 170-210 range (cyan to blue)
            saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
            lightness = Math.floor(Math.random() * 20) + 70; // 70-90%
        } else {
            // Lavender blue variations for light theme
            hue = Math.floor(Math.random() * 30) + 230; // 230-260 range (blue to purple)
            saturation = Math.floor(Math.random() * 30) + 60; // 60-90%
            lightness = Math.floor(Math.random() * 20) + 60; // 60-80%
        }
        
        // Set firefly styles
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.animationDelay = `${blinkDelay}s`;
        firefly.style.animationDuration = `${animationDuration}s`;
        firefly.style.zIndex = zIndex;
        
        // Create more dramatic glow effect
        const blurAmount = size * 1.5;
        firefly.style.boxShadow = `0 0 ${size * 4}px ${size}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
        firefly.style.filter = `blur(${blurAmount}px)`;

        // Create smoother, more natural movement
        function moveFirefly() {
            const currentX = parseFloat(firefly.style.transform.split('(')[1].split('vw')[0]);
            const currentY = parseFloat(firefly.style.transform.split(', ')[1].split('vh')[0]);
            
            // Create a more natural movement by limiting the distance
            const maxDistance = 20;
            
            // Calculate new position with limited movement range
            let newX = currentX + (Math.random() * maxDistance * 2 - maxDistance);
            let newY = currentY + (Math.random() * maxDistance * 2 - maxDistance);
            
            // Keep fireflies within the viewport bounds with padding
            newX = Math.max(0, Math.min(100, newX));
            newY = Math.max(0, Math.min(100, newY));
            
            // Set movement duration based on distance (further = slower)
            const distance = Math.sqrt(Math.pow(newX - currentX, 2) + Math.pow(newY - currentY, 2));
            const duration = (distance / maxDistance) * 8 + 5;
            
            // Apply the transition and transform with easing
            firefly.style.transition = `transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
            firefly.style.transform = `translate(${newX}vw, ${newY}vh)`;
            
            // Schedule next movement
            setTimeout(moveFirefly, duration * 1000);
        }

        // Start movement with a random delay
        setTimeout(moveFirefly, Math.random() * 2000);
    }
    
    // Update fireflies when theme changes
    function updateFirefliesOnThemeChange() {
        const fireflies = document.querySelectorAll('.firefly');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        
        fireflies.forEach(firefly => {
            const size = parseFloat(firefly.style.width);
            let hue, saturation, lightness;
            
            if (isDarkTheme) {
                // Teal to cyan to light blue for dark theme
                hue = Math.floor(Math.random() * 40) + 170; // 170-210 range (cyan to blue)
                saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
                lightness = Math.floor(Math.random() * 20) + 70; // 70-90%
            } else {
                // Lavender blue variations for light theme
                hue = Math.floor(Math.random() * 30) + 230; // 230-260 range (blue to purple)
                saturation = Math.floor(Math.random() * 30) + 60; // 60-90%
                lightness = Math.floor(Math.random() * 20) + 60; // 60-80%
            }
            
            // Update glow effect
            const blurAmount = size * 1.5;
            firefly.style.boxShadow = `0 0 ${size * 4}px ${size}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
            firefly.style.filter = `blur(${blurAmount}px)`;
        });
    }
    
    // Listen for theme toggle changes
    const themeToggle = document.getElementById('theme-toggle-input');
    if (themeToggle) {
        themeToggle.addEventListener('change', updateFirefliesOnThemeChange);
    }
    
    // Add resize event listener to maintain firefly distribution
    window.addEventListener('resize', function() {
        const fireflies = document.querySelectorAll('.firefly');
        fireflies.forEach(firefly => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            firefly.style.transition = 'none';
            firefly.style.transform = `translate(${x}vw, ${y}vh)`;
            
            // Re-enable transitions after repositioning
            setTimeout(() => {
                firefly.style.transition = `transform ${Math.random() * 3 + 5}s cubic-bezier(0.4, 0, 0.2, 1)`;
            }, 50);
        });
    });
});
