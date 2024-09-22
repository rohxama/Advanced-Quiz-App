export const initNavigation = () => {
    const toggleBtn = document.querySelector('.nav-toggle-btn');
    const nav = document.querySelector('nav');
    const toggleIcon = toggleBtn.querySelector('i');
    const wrapper = document.querySelector('.wrapper');
    let isNavOpen = false;

    const handleNavToggle = () => {
        if (isNavOpen) {
            gsap.to(nav, { x: '-100%', duration: 0.5, ease: 'circ.in' }).eventCallback('onComplete', () => {
                nav.classList.add('hidden');
            });
            toggleIcon.className = 'ri-menu-line';
            wrapper.classList.add('nav-hidden');
            isNavOpen = false;
        } else {
            nav.classList.remove('hidden');
            gsap.to(nav, { x: '0%', duration: 0.5, ease: 'circ.out' });
            toggleIcon.className = 'ri-close-line';
            wrapper.classList.remove('nav-hidden');
            isNavOpen = true;
        }
    };

    const handleResize = () => {
        if (window.innerWidth >= 1080) {
            toggleBtn.style.display = 'none';
            nav.classList.remove('hidden');
            wrapper.classList.remove('nav-hidden');
            gsap.set(nav, { x: '0%', duration: 0.5, ease: 'circ.out' });
            isNavOpen = false;
        } else {
            toggleBtn.style.display = 'flex';
            nav.classList.add('hidden');
            gsap.set(nav, { x: '-100%', duration: 0.5, ease: 'circ.out' });
        }
    };

    window.addEventListener('resize', handleResize);
    toggleBtn.addEventListener('click', handleNavToggle);
    handleResize();
};
