document.getElementById('valentine-button').addEventListener('click', () => {
    document.getElementById('valentine-modal').showModal();
});

document.getElementById('kid-button').addEventListener('click', () => {
    document.getElementById('kid-modal').showModal();
});

document.getElementById('mother-button').addEventListener('click', () => {
    document.getElementById('mother-modal').showModal();
});

// Para cerrar los modales
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).close();
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle del menú
    hamburger.addEventListener("click", function (e) {
        e.stopPropagation(); // Evita que el click en el botón cierre el menú
        navLinks.classList.toggle("open");
    });

    // Cierra al hacer click en cualquier enlace del menú
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
        });
    });
});

