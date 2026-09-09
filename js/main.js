// Scroll suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Animaciones al hacer scroll
const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(section => observer.observe(section));

// Filtro de proyectos
const botones = document.querySelectorAll('.filtros button');
const proyectos = document.querySelectorAll('.proyecto');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const filtro = boton.dataset.filter;

        proyectos.forEach(proyecto => {
            if (filtro === 'all' || proyecto.dataset.category === filtro) {
                proyecto.style.display = 'block';
            } else {
                proyecto.style.display = 'none';
            }
        });
    });
});

//Menú hamrburguesa
// Menú hamburguesa mejorado
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.textContent = isOpen ? '✕' : '☰';
    toggle.setAttribute('aria-expanded', isOpen);
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.textContent = '☰';
        toggle.setAttribute('aria-expanded', 'false');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.textContent = '☰';
        toggle.setAttribute('aria-expanded', 'false');
    }
});

const experienceButtons = document.querySelectorAll(".experience-toggle");

experienceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".experiencia-item");
        const moreItems = card.querySelectorAll(".experience-more");

        const isOpen = card.classList.toggle("active");

        moreItems.forEach((item) => {
            item.style.display = isOpen ? "list-item" : "none";
        });

        button.textContent = isOpen
            ? "Ver menos ↑"
            : "Ver más ↓";
    });
});

