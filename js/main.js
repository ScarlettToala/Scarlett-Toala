
/* =========================================
   Animaciones al hacer scroll
========================================= */

const seccionesOcultas = document.querySelectorAll('.hidden');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); // ya no hace falta vigilarla
            }
        });
    });

    seccionesOcultas.forEach(seccion => observer.observe(seccion));
} else {
    // Navegadores antiguos: mostrar todo directamente
    seccionesOcultas.forEach(seccion => seccion.classList.add('show'));
}


/* =========================================
   Filtro de proyectos
========================================= */

const botonesFiltro = document.querySelectorAll('.filtros button');
const proyectos = document.querySelectorAll('.proyecto');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const filtro = boton.dataset.filter;

        // Estado activo del botón
        botonesFiltro.forEach(b => {
            const activo = b === boton;
            b.classList.toggle('active', activo);
            b.setAttribute('aria-pressed', String(activo));
        });

        // Mostrar / ocultar proyectos
        proyectos.forEach(proyecto => {
            const visible = filtro === 'all' || proyecto.dataset.category === filtro;
            proyecto.style.display = visible ? '' : 'none';
        });
    });
});


/* =========================================
   Menú hamburguesa
========================================= */

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

function setMenu(abierto) {
    menu.classList.toggle('active', abierto);
    toggle.classList.toggle('active', abierto);
    toggle.textContent = abierto ? '✕' : '☰';
    toggle.setAttribute('aria-expanded', String(abierto));
    toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
}

toggle.addEventListener('click', () => {
    setMenu(!menu.classList.contains('active'));
});

// Cerrar al hacer clic en un enlace
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

// Cerrar al hacer clic fuera
document.addEventListener('click', e => {
    if (!e.target.closest('nav')) setMenu(false);
});

// Cerrar con Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenu(false);
});


/* =========================================
   Experiencia: "Ver más / Ver menos"
   (la visibilidad la controla el CSS con .active)
========================================= */

document.querySelectorAll('.experience-toggle').forEach(button => {
    const card = button.closest('.experiencia-item');

    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
        const abierto = card.classList.toggle('active');

        button.setAttribute('aria-expanded', String(abierto));
        button.innerHTML = abierto
            ? 'Ver menos <i class="fa-solid fa-arrow-up-long" aria-hidden="true"></i>'
            : 'Ver más <i class="fa-solid fa-arrow-down-long" aria-hidden="true"></i>';
    });
});