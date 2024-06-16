document.addEventListener('DOMContentLoaded', () => {
    const navList = document.getElementById('nav-list');
    const menuIcon = document.getElementById('menu-icon');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuIcon.addEventListener('click', () => {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });

    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;

        // Background color change on scroll
        const bgColor = `hsl(${(st / document.body.scrollHeight) * 360}, 100%, 97%)`;
        document.body.style.backgroundColor = bgColor;

        // Section highlighting
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (st >= sectionTop && st < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quantum scrolling
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }, { threshold: 1.0 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
