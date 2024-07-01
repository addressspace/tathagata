document.addEventListener("DOMContentLoaded", function() {
    const numberOfFireflies = 10;
    const container = document.createElement('div');
    container.id = 'fireflies-container';
    document.body.appendChild(container);

    for (let i = 0; i < numberOfFireflies; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        container.appendChild(firefly);
        animateFirefly(firefly);
    }

    function animateFirefly(firefly) {
        const size = Math.random() * 3 + 3;
        const blinkDelay = Math.random() * 2;
        const zIndex = Math.floor(Math.random() * 10) + 1; // Random z-index between 1 and 10

        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.animationDelay = `${blinkDelay}s`;
        firefly.style.zIndex = zIndex; // Set random z-index

        function moveFirefly() {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 5 + 5;

            firefly.style.transition = `transform ${duration}s ease-in-out`;
            firefly.style.transform = `translate(${x}vw, ${y}vh)`;

            setTimeout(moveFirefly, duration * 1000);
        }

        moveFirefly();
    }
});
