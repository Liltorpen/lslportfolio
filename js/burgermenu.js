    const burger = document.querySelector('.nav-burger');
    const navMobile = document.querySelector('.nav--mobile');
    const links = document.querySelectorAll('.nav--mobile .nav__link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMobile.classList.toggle('active');
        
        document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : 'auto';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navMobile.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });