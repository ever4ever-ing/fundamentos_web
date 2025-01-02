//const boton1 = document.getElementById ("boton1");
//boton1.addEventListener("click", function() {
//    this.innerText = "Cerrar sesión";
//});

const botonSesion = document.getElementById("boton1");
botonSesion.addEventListener("click", function () {
    if (botonSesion.textContent === "Iniciar sesión") {
    botonSesion.textContent = "Cerrar sesión";
    } else {
    botonSesion.textContent = "Iniciar sesión";
    }
});

const botonDefinicion = document.getElementById("boton4");
botonDefinicion.addEventListener("click", function () {
    this.remove();
});

var boton2 = document.getElementById("boton2");
boton2.addEventListener("click", function () {
    alert("Te gustó la definición de: gatos atigrados");
});

var boton3 = document.getElementById("boton3");
boton3.addEventListener("click", function () {
    alert("Te gustó la definición de: Golden Retriever");
});

// BOTON MEGUSTA CON CONTADOR
var contador = 0; // inicializamos el contador en 0
var boton2 = document.getElementById("boton2"); // obtenemos el botón

boton2.addEventListener("click", function () {
    contador++; // incrementamos el contador
    boton2.textContent = contador + " Me gusta"; // actualizamos el texto del botón
});

var contador1 = 0;
var boton3 = document.getElementById("boton3");

boton3.addEventListener("click", function () {
    contador1++;
    boton3.textContent = contador1 + " Me gusta";
});
