/*-----------Crea el mensaje de Alerta cuando el usuario da click en el botón "Crear eventor" de la parte superior derecha----*/

button2.addEventListener("click", function () {
    alert("¡Evento creado!")
});


/*---------------------- Contador de asistentes---------------------------*/

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".misbotones");
    let counters = document.querySelectorAll(".counter");


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let currentCounter = counters[index];
            let count = currentCounter.innerText;
            currentCounter.innerText = ++count;
        });

    });

});


/*----------------Permite cambiar la imagen del mapa-------- */

let imagenmapa = document.querySelector('.mapa img'); /* Elementos que quiero modificar */

let changePage = () => {
    imagenmapa.src="img/mapa-2.png";
}






