var botonCambiar = document.querySelectorAll(".botonAdoptar");
var Donar = document.getElementById("Donar");

botonCambiar.forEach(function(boton) {
    boton.addEventListener("click", function() {
        this.innerText = "Adoptado";
        this.style.backgroundColor = "#2A4E14"; 
        this.style.color = "white"; 
    });
});

Donar.addEventListener("click", function() {
    alert("¡Gracias por donar a AdoptaTuÁrbol!");
});

function cambiarTexto() {
    const select = document.getElementById("miSelect");
    const tituloArboles = document.getElementById("tituloArboles");
    const seleccion = select.value;

    switch (seleccion) {
        case 'opcion1':
            tituloArboles.textContent = "Mostrando: Árboles Frutales";
            break;
        case 'opcion2':
            tituloArboles.textContent = "Mostrando: Árboles de Flores";
            break;
        case 'opcion3':
            tituloArboles.textContent = "Mostrando: Árboles Ornamentales";
            break;
        case 'todos':
        default:
            tituloArboles.textContent = "Mostrando: Todos los Árboles";
    }
}