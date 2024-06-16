// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    let isScrolling;

    body.classList.add('auto-hide-scrollbar');

    body.addEventListener('scroll', function() {
        clearTimeout(isScrolling);

        body.classList.remove('auto-hide-scrollbar');

        isScrolling = setTimeout(() => {
            body.classList.add('auto-hide-scrollbar');
        }, 2000);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
