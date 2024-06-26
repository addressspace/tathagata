function createFireflies(num) {
    for (let i = 0; i < num; i++) {
        let firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.animationDuration = `${Math.random() * 5 + 3}s`;
        firefly.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(firefly);
    }
}

createFireflies(10); // Create 50 fireflies