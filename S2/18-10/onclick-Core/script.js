//CAMBIAR TEXTTO
var botoniniciar = document.getElementById("botoniniciar");
botoniniciar.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});
//ELIMINAR ELEMENTO
var botondefin = document.getElementById("botondefinicion");
botondefin.addEventListener("click", function() {
    this.remove();
});
//ELIMINAR MAS DE UN ELEMENTO
var botondefin = document.querySelectorAll(".botondefinicion");
botondefin.forEach(function(botonD) {
    botonD.addEventListener("click", function() {
        this.remove();
    });
});

//ALERTA DE CLICK
var boton = document.getElementById ("likebtn");
boton.addEventListener("click", function(){
    alert("Has echo click en Me gusta ")
})

//ALERTA DE CLICK
var botonM = document.getElementById ("likeboton");

botonM.addEventListener("click", function(){
    alert("Has echo click en Me gusta ")
})



//BOTON MEGUSTA CON CONTADOR
var contador = 0; //inicializamos el contador en cero
var boton = document.getElementById("likebtn") //seleccionamos el boton por su id

boton.addEventListener("click", function(){
    contador++;//incrementamos el contador
    boton.textContent = contador + "Me gusta"; // concatenamos el contador con el texto "Me gusta"
})

//BOTON MEGUSTA CON CONTADOR
var contadorM = 0;
var botonM = document.getElementById("likeboton")

botonM.addEventListener("click", function(){
    contadorM++;
    botonM.textContent = contadorM + "Me gusta";
})




























//ALERTA DE CLICK
var botondefin = document.getElementById ("botondefinicion");
botondefin.addEventListener("click", function(){
    alert("Has echo agregado una definición")
})
