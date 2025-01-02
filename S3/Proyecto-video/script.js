document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".miVideo");

    // Función para reproducir el video cuando pasa el mouse sobre él
    function reproducirVideo() {
        this.play();
    }
    // Función para pausar el video cuando se retira el mouse del mismo
    function pausarVideo() {
        this.pause();
    }
    // Mostrar los videos al cargar el contenido
    videos.forEach(function (video) {
        video.style.display = "block";

        // Evento para reproducir el video al pasar el mouse sobre él
        video.addEventListener("mouseenter", reproducirVideo);

        // Evento para pausar el video al salir el mouse del mismo
        video.addEventListener("mouseleave", pausarVideo);
    });
});


// Modificar todos los botones de definición al hacer click
var botones = document.querySelectorAll(".myButtons");
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        this.style.backgroundColor = "#000000";
    });
});

// Cambiar el texto y color del botón al hacer click
let botonLogin = document.getElementById("login");
botonLogin.addEventListener("click", function () {
    this.innerText = "Logout";
    this.style.backgroundColor = "red";
});
//Solo selecciona el primer elemento con la clase profile-pic que encuentre
/*
var logoImg = document.querySelecto(".profile-info .profile-pic");
logoImg.addEventListener("click", function () {
    alert("Has hecho click en la imagen");
});
*/
// Para seleccionar todos los elementos con la clase profile-pic
var logoImg = document.querySelectorAll(".profile-info .profile-pic");
logoImg.forEach(function (img) {
    img.addEventListener("click", function () {
        alert("Has hecho click en la imagen");
        logoImg.src = "/img/black.png";
        logoImg.alt = "Imagen nueva";
    });
});




