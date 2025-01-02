/*CAMBIAR BOTON/////////////////////////////*/
var iniciarsesion = document.getElementById("iniciarsesion");
iniciarsesion.addEventListener("click", function() {
    this.innerText = "cerrar sesión";
});

// Eliminar elemento
var AgregarDefinicion = document.querySelectorAll(".AgregarDefinicion");
AgregarDefinicion.forEach(function(botonD) {
    botonD.addEventListener("click", function(){
        this.remove()
    })
})
/*BOTON DE ALARMA 1/////////////////////////////*/
var botonM = document.getElementById ("like1");

botonM.addEventListener("click", function(){
    alert("Has echo click en Me gusta ")
})
/*BOTON DE ALARMA 2////////////////////////////*/
var botonM = document.getElementById ("like2");

botonM.addEventListener("click", function(){
    alert("Has echo click en Me gusta ")
})


/* CONTADOR DE LIKES1/////////////////////////////////////////*/
var contador1 = 0; 
var boton1 = document.getElementById("like1") 

boton1.addEventListener("click", function(){
    contador1++;
    boton1.textContent = contador1 + "like"; 
})
/* CONTADOR LIKES2//////////////////////////////////////*/
var contador2 = 0; 
var boton2 = document.getElementById("like2") 

boton2.addEventListener("click", function(){
    contador2++;
    boton2.textContent = contador2 + "likes"; 
})