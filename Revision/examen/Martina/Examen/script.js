// Filtro
function filtrar(select){
    const tipoSeleccionado = select.value;
    const mostrarFiltro = document.getElementById("mostrarFiltro");

    switch(tipoSeleccionado){
        case "frutales":
            mostrarFiltro.textContent = "Mostrando: Árboles frutales";
            break;
        case "nativos":
            mostrarFiltro.textContent = "Mostrando: Árboles nativos";
            break;
        case "flores":
            mostrarFiltro.textContent = "Mostrando: Árboles de flor";
            break;
        case "ornamental":
            mostrarFiltro.textContent = "Mostrando: Árboles ornamentales";
            break;
        default:
            mostrarFiltro.textContent = "Mostrando: Todos los árboles";
    }
}
//Boton donar
document.addEventListener("DOMContentLoaded", function() {
    const donarBtn = document.querySelector('.Donar');

    donarBtn.addEventListener('click', function() {
        // Mostrar un mensaje de agradecimiento
        alert('¡Gracias por donar a AdoptaTuÁrbol!');
    });
});

// Botones de adoptar
const adoptarButtons = document.querySelectorAll('.Adoptar2');

adoptarButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        this.textContent = 'Adoptado';
        this.style.backgroundColor = 'rgb(30, 118, 42)';
        this.style.color = 'white'; 
    });
});