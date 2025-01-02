document.addEventListener("DOMContentLoaded", function () {

    /*Cambio de Imgen Mapa*/
    let enlace = document.querySelector(".cambiarImagen");
    let imagen = document.querySelector(".banner");

    enlace.addEventListener("click", function (event) {
        event.preventDefault();
        if (imagen.src.includes("mapa-1.png")) {
            imagen.src = "img/mapa-2.png"; // Cambia a la nueva imagen
        } else {
            imagen.src = "img/mapa-1.png"; // Vuelve a la imagen original
        }
    });


    // Función para manejar los clics en los botones
    function manejarMeGusta(botonId, mostrarId, valorInicial) {
        let contador = valorInicial;
        let boton = document.getElementById(botonId);
        let mostrar = document.getElementById(mostrarId);

        mostrar.textContent = " " + contador;

        boton.addEventListener("click", function () {
            contador++;
            mostrar.textContent = " " + contador;
        });
    }

    manejarMeGusta("btn_1", "btn_1", 5);
    manejarMeGusta("btn_2", "btn_2", 10);
    manejarMeGusta("btn_3", "btn_3", 8);

    // Boton Alerta
    let boton1 = document.querySelector(".crearEvento");
    boton1.addEventListener("click", function () {
        alert("Evento Creado!!!");
    });


});



