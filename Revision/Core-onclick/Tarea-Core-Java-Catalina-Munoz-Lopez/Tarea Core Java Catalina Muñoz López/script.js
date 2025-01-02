document.addEventListener("DOMContentLoaded", function() {
    const botonIniciar = document.getElementById("botonIniciar");
    const botonCerrar = document.getElementById("botonCerrar");

    let usuarioLogueado = false;

    botonIniciar.addEventListener("click", function() {
        if (!usuarioLogueado) {
            alert("¡Has iniciado sesión!");
            usuarioLogueado = true; 
            botonIniciar.style.display = "none"; 
            botonCerrar.style.display = "block"; 
        }
    });

    // Función para cerrar sesión
    botonCerrar.addEventListener("click", function() {
        if (usuarioLogueado) {
            alert("¡Has cerrado sesión!");
            usuarioLogueado = false; 
            botonCerrar.style.display = "none"; 
            botonIniciar.style.display = "block"; 
        }
    });

    
    const textos = document.querySelectorAll(".AgregaraldiccionarioEliminar");
    textos.forEach(function(texto) {
        texto.addEventListener("click", function() {
            this.remove();
        });
    });

    // Manejo de "Me gusta" para Gato Atigrado
    const botonMeGusta1 = document.getElementById("botonMeGusta1");
    const contador1 = document.getElementById("contador1");
    let numeroDeMeGustas1 = 22; // Inicializa el contador

    botonMeGusta1.addEventListener("click", function() {
        numeroDeMeGustas1++;
        contador1.textContent=`${numeroDeMeGustas1} Me gusta`; 
        alert("¡Gracias por tu Me gusta a Gato Atigrado!");
    });
    const botonMeGusta2 = document.getElementById("botonMeGusta2");
    const contador2 = document.getElementById("contador2");
    let numeroDeMeGustas2 = 25; // Inicializa el contador en 25

    botonMeGusta2.addEventListener("click", function() {
        numeroDeMeGustas2++; // Aumenta el contador
        contador2.textContent = `${numeroDeMeGustas2} Me gusta`; // Actualiza el texto del contador
        alert("¡Gracias por tu Me gusta para Golden Retriever!");
    });
});