// Obtenemos el botón por su id
var botonDonar = document.getElementById("Donar");
var botonAdoptar1 = document.getElementById("botonAdoptar1");
var botonAdoptar2 = document.getElementById("botonAdoptar2");
var botonAdoptar3 = document.getElementById("botonAdoptar3");
var botonAdoptar4 = document.getElementById("botonAdoptar4");
var opciontodos = document.getElementById("todos");
var opcionfrutales = document.getElementById("frutales");
var opcionflores = document.getElementById("flores");
var opcionorna = document.getElementById("ornamentales");
var textofiltro = document.getElementById("textofiltro");

// Agregamos un evento 'click' al botón
botonDonar.addEventListener("click", function() {
    // Mostramos la alerta al hacer click
    window.alert("Gracias por donar a Adopta tu Arbol!");
});

// Agregamos un evento 'click' al botón
botonAdoptar1.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Adoptado";
    this.style.backgroundColor = "#698d56";
});

// Agregamos un evento 'click' al botón
botonAdoptar2.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Adoptado";
    this.style.backgroundColor = "#698d56";
});

    
// Agregamos un evento 'click' al botón
botonAdoptar3.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Adoptado";
    this.style.backgroundColor = "#698d56";
});


// Agregamos un evento 'click' al botón
botonAdoptar4.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Adoptado";
    this.style.backgroundColor = "#698d56";
});


// Agregamos un evento 'click' al botón
opciontodos.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    textofiltro.innerText = "Todos los arboles";

});

opcionfrutales.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    textofiltro.innerText = "Arboles frutales";

});

opcionflores.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    textofiltro.innerText = "Arboles de flores";

});

opcionorna.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    textofiltro.innerText = "Arboles ornamentales";

});


