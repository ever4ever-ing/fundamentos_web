///////Contador Me gusta Gato//////////////////

var contador = 0;
var boton = document.getElementById("likebtn")

boton.addEventListener("click", function () {
    contador++;
    boton.textContent = contador + "Me gusta";
});

///////Mensaje de alerta//////////////////////////////

boton.addEventListener("click", function () {
    alert("te gustó el gato atigrado")
});


///////Contador Me gusta Golden Retriver/////////////////////////

var contador2 = 0;
var boton2 = document.getElementById("likebtn2")

boton2.addEventListener("click", function () {
    contador2++;
    boton2.textContent = contador2 + "Me gusta";
})

/////Mensaje de alerta///////////////////////////////
boton2.addEventListener("click", function () {
    alert("te gustó el golden retriver")
});

/////////////////Cambiar de Iniciar Sesion a  Cerrar Seseión////////////////////////


// Obtenemos el botón por su id
var botonSesion = document.getElementById("botonSesion");

// Agregamos un evento 'click' al botón
botonSesion.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Cerrar sesión";
});


/////////////////Remover botón//////////////////////////////////


var hide = (element)=>{     
    element.remove();
    console.log("Entró");      /* Para verificar que funciona en la consola */
}