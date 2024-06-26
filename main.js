const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const overlayNavLinks = menuOverlay.querySelectorAll('nav a');
    const closeBtn = document.querySelector('.close-btn');
    let colors = ['#f9f9f9', '#e0f7fa', '#ffe0b2', '#f3e5f5', '#fff9c4', '#e1bee7'];

    let scrollPosition = 0;
    const scrollAmount = window.innerHeight / 3;

    document.body.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollPosition += event.deltaY;
        scrollPosition = Math.max(0, Math.min(scrollPosition, document.body.scrollHeight - window.innerHeight));
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            if (scrollTop >= section.offsetTop - 60 && scrollTop < section.offsetTop + section.offsetHeight - 60) {
                document.body.style.backgroundColor = colors[index];
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
                section.style.transform = 'translateY(-20px)';
            } else {
                section.style.transform = 'translateY(0)';
            }
        });
    });

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollPosition = sections[index].offsetTop;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        });
    });

    menuBtn.addEventListener('click', () => {
        menuOverlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
    });

    overlayNavLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menuOverlay.style.display = 'none';
            scrollPosition = sections[index].offsetTop;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        });
    });