document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header-content nav');
    const navLinks = document.querySelectorAll('.header-content nav a');

    if (!menuBtn || !nav) return;

    function openMenu() {
        nav.classList.add('is-open');
        menuBtn.classList.add('is-open-btn');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        nav.classList.remove('is-open');
        menuBtn.classList.remove('is-open-btn');
        document.body.classList.remove('menu-open');
    }

    menuBtn.addEventListener('click', (e) => {
        if (nav.classList.contains('is-open')) closeMenu();
        else openMenu();
    });

    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('click', (e) => {
        if (!nav.classList.contains('is-open')) return;
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnBtn = menuBtn.contains(e.target);
        if (!isClickInsideNav && !isClickOnBtn) closeMenu();
    });
});