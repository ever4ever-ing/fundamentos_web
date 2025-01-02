// Función para manejar los clics en los botones
function manejarMeGusta(botonId, mostrarId) {
    let contador = 0;
    let boton = document.getElementById(botonId);
    let mostrarLike = document.getElementById(mostrarId);

    boton.addEventListener("click", function() {
        contador++;
        mostrarLike.textContent = contador + " Like(s)";
    });
}

// // Aplicar la función a cada botón
manejarMeGusta("likebtn-1", "mostrarlike-1");
manejarMeGusta("likebtn-2", "mostrarlike-2");
manejarMeGusta("likebtn-3", "mostrarlike-3");


// // Función para manejar los clics en los botones
// function manejarMeGusta(botonId, mostrarId) {
//     let contador = 0;
//     let boton = document.querySelector(`#${botonId}`);
//     let mostrarLike = document.querySelector(`#${mostrarId}`);
    
//     boton.addEventListener("click", function() {
//         contador++;
//         mostrarLike.textContent = contador + " Like(s)";
//     });
// }

// // Aplicar la función a cada botón
// manejarMeGusta("likebtn-1", "mostrarlike-1");
// manejarMeGusta("likebtn-2", "mostrarlike-2");
// manejarMeGusta("likebtn-3", "mostrarlike-3");
