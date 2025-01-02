// Obtenemos todas las imágenes con la clase 'imagenEliminar'
var imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", function() {
        // Eliminamos la imagen haciendo referencia a 'this'
        this.remove();
    });
});