var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
    alert("gracias por adoptar tu Árbol");
});

var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
    alert("gracias por donar a nuestro movimiento");
});

// Seleccionamos el <select> y el párrafo que queremos cambiar
const dropdown = document.getElementById("opciones");
const textoDinamico = document.getElementById("texto-dinamico");

// Añadimos un event listener al select para detectar cambios
dropdown.addEventListener("change", function () {
  // Obtenemos el valor de la opción seleccionada
    const seleccion = dropdown.value;

  // Cambiamos el texto del párrafo dependiendo de la opción seleccionada
    textoDinamico.textContent = `Mostrando: ${seleccion}`;
});

// Seleccionamos todos los botones con la clase 'miBoton'
var botones = document.querySelectorAll(".adopt-btn");

// Recorremos todos los botones y añadimos un listener a cada uno
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
    // Cambiamos el color de fondo del botón que fue clicado
    boton.style.backgroundColor = "yellow";

    // Cambiamos el texto del botón que fue clicado
    boton.textContent = "Adoptado";
    });
});

