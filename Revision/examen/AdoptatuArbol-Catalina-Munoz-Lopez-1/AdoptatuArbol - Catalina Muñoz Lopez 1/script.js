document.addEventListener("DOMContentLoaded", function() {
    //Alerta Donación//
    var Donar = document.getElementById("Donar");
    Donar.addEventListener("click", function() {
    alert("¡Gracias por Donar!");
    });
    //Alerta Adopción//
    var Adoptar = document.getElementById("Adoptar");
    Adoptar.addEventListener("click", function() {
    alert("¡Gracias por Adoptar!");
    });
    //Cambio del valor del select//
    document.getElementById("Arboles").addEventListener("change", function() {
        let select = document.getElementById("Arboles");
        let textoSeleccionado = select.options[select.selectedIndex].text; 
        document.querySelector(".CambiarTexto").textContent = textoSeleccionado;
    });
    //Cambio de boton Álamo y mensaje//
    var botonCambiar1 = document.getElementById("botonCambiar1");
    botonCambiar1.addEventListener("click", function() {
        this.innerText = "¡Adoptado!";
        this.style.backgroundColor="lightgreen";
        alert("¡Gracias por Adoptar un Álamo!");
    });
    //Cambio de boton Pino y mensaje//
    var botonCambiar2 = document.getElementById("botonCambiar2");
    botonCambiar2.addEventListener("click", function() {
        this.innerText = "¡Adoptado!";
        this.style.backgroundColor="lightgreen";
        alert("¡Gracias por Adoptar un Pino!");
    });
    //Cambio de boton Fresno y mensaje//
    var botonCambiar3 = document.getElementById("botonCambiar3");
    botonCambiar3.addEventListener("click", function() {
        this.innerText = "¡Adoptado!";
        this.style.backgroundColor="lightgreen";
        alert("¡Gracias por Adoptar un Fresno!");
    });
    //Cambio de boton Jakaranda y mensaje//
    var botonCambiar4 = document.getElementById("botonCambiar4");
    botonCambiar4.addEventListener("click", function() {
        this.innerText = "¡Adoptado!";
        this.style.backgroundColor="lightgreen";
        alert("¡Gracias por Adoptar un Jakaranda!");
    });
});