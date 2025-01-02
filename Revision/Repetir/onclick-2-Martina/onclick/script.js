const iniciarButtons = document.querySelectorAll('.btn-inic');

iniciarButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        this.textContent = 'Cerrar sesión';
    });
});

const agregarbutton = document.getElementById('def');
agregarbutton.addEventListener('click', () => {
    agregarbutton.style.visibility = 'hidden'; // Hace invisible el botón, pero sigue ocupando espacio
});