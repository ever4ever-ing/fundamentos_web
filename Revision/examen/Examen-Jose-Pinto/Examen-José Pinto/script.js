document.addEventListener('DOMContentLoaded', () => {
    const adoptarButtons = document.querySelectorAll('.adoptar-btn');
    const donarButton = document.getElementById('donar');
    const filtroSelect = document.getElementById('filtro-arboles');
    const arbolesSection = document.getElementById('mostrar-arboles');

    adoptarButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('adoptado');
            button.textContent = button.classList.contains('adoptado') ? 'Adoptado' : 'Adoptar';
        });
    });

    donarButton.addEventListener('click', () => {
        alert('¡Gracias por donar a AdoptaTuArbol!');
    });

    filtroSelect.addEventListener('change', () => {
        const selectedValue = filtroSelect.value;
    
        switch (selectedValue) {
            case 'frutales':
                arbolesSection.textContent = 'Mostrando: Árboles Frutales';
                break;
            case 'florales':
                arbolesSection.textContent = 'Mostrando: Árboles Florales';
                break;
            default:
                arbolesSection.textContent = 'Mostrando: Árboles Ornamentales';
                break;
        }
    });
});
