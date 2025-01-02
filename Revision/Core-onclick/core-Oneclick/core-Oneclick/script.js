var borrar = document.querySelectorAll(".borrarBotton");
borrar.forEach(function(borrarbotton) {
    borrarbotton.addEventListener("click", function() {
        
        this.remove();
    });
});


var botonCambiar = document.getElementById("botonCambiar");
botonCambiar.addEventListener("click", function() {
    
    this.innerText = "Cerrar Sesión";
});

var contador=0;
var boton = document.getElementById("buttonMegusta1");
boton.addEventListener("click", function(){
    contador++;
    boton.textContent = contador +" " + "Me gusta";
    alert("Has dado un like")
})



var contador2=0;
var boton2 = document.getElementById("buttonMegusta2");
boton2.addEventListener("click", function(){
    contador2 ++;
    boton2.textContent = contador2 +" " + "Me gusta";
    alert("Has dado un like")
})




