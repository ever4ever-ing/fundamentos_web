// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Animación de las barras de habilidades
    const skillMeters = document.querySelectorAll('.skill-meter');
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = `${entry.target.getAttribute('data-level')}%`;
                observer.unobserve(entry.target);
            }
        });
    };

    const skillObserver = new IntersectionObserver(animateSkills, {
        root: null,
        threshold: 0.5,
    });

    skillMeters.forEach(meter => {
        meter.style.width = '0%';
        skillObserver.observe(meter);
    });

    // Efecto parallax para el encabezado
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de entrada para las secciones
    const sections = document.querySelectorAll('main section');
    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(fadeInSection, {
        root: null,
        threshold: 0.1,
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });

    // Interactividad para las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });

    // Animación de la línea de tiempo
    const timelineItems = document.querySelectorAll('.timeline-item');
    const animateTimeline = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const timelineObserver = new IntersectionObserver(animateTimeline, {
        root: null,
        threshold: 0.5,
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Efecto de hover para los iconos de certificaciones
    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('i').classList.add('fa-spin');
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('i').classList.remove('fa-spin');
        });
    });

    // Menú de navegación responsive
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.classList.add('nav-toggle');
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(navToggle, nav);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Cambio de tema (claro/oscuro)
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌓';
    themeToggle.classList.add('theme-toggle');
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Cargar tema guardado
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Animación de escritura para el lema
const lema = document.querySelector('#sobre-mi p:last-child');
const lemaText = lema.textContent;
lema.textContent = '';
let i = 0;

function typeWriter() {
    if (i < lemaText.length) {
        lema.textContent += lemaText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 1000);  // Comienza la animación después de 1 segundo
