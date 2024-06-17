window.addEventListener('scroll', () => {
    document.body.style.backgroundColor = `rgb(${255 - window.scrollY / 4}, ${255 - window.scrollY / 4}, ${255 - window.scrollY / 4})`;
});

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
    mobileNav.style.display = 'none';
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
