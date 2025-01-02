cierre.addEventListener("'click'", function () {
    this.innerText = "iniciar sesion"
});


adddef.addEventListener("'click'", function () {
    this.remove();
});

var contadorgato=0;
var boton1 = document.getElementById("me-gusta-gato");
boton1.addEventListener('click', function() {
    contadorgato++;
    this.innerText = contadorgato + " me gusta"
});

var contadorperro=0;
var boton2 = document.getElementById("me-gusta-perro");
boton2.addEventListener('click', function() {
    contadorperro++;
    this.innerText = contadorperro + " me gusta"
});
boton1.addEventListener('click',function(){
    alert("te gusto el gato atigrado")
});

boton2.addEventListener('click',function(){
    alert("te gusto el golden retriver")
});