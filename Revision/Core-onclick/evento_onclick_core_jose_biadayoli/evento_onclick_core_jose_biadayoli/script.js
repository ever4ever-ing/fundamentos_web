// Boton Iniciar Sesion
var btn_sesion = document.getElementById("btn_sesion");

btn_sesion.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});

// Boton Eliminar 'Agregar definición'
var btn_definicion = document.getElementById("btn_definicion");

btn_definicion.addEventListener("click", function() {
    this.remove();
});

// Boton MeGusta 1
var contador1 = 0;
var boton1 = document.getElementById("likebtn-1")

boton1.addEventListener("click", function(){
    contador1++;
    boton1.textContent = contador1 + " Me gusta";
    alert("Te ha gustado el post de Gato Atigrado");
})

// Boton MeGusta 2
var contador2 = 0;
var boton2 = document.getElementById("likebtn-2")

boton2.addEventListener("click", function(){
    contador2++;
    boton2.textContent = contador2 + " Me gusta";
    alert("Te ha gustado el post de Golden Retriever");
})