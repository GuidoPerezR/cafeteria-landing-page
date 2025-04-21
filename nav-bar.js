// Animacion para nav-bar en buscadores que no soporten las propiedades establecidas
const navBar = document.querySelector('.nav-bar');

// Detecta si se soporta animation-timeline
const supportsScrollTimeline = CSS.supports('animation-timeline: scroll()');

if (!supportsScrollTimeline) {
    // Solo si NO se soporta, agregamos clase scrolled al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 320) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });
}