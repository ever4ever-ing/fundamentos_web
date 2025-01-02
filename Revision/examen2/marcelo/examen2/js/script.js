var botonCambiar = document.getElementById("nuevoseventos");
var imgmapa1 = document.getElementById("mapa1");
var botonCrearEvento = document.getElementById("botonEvento");

var botonAsistencia1 = document.getElementById("asistenteimg1");
var botonAsistencia2 = document.getElementById("asistenteimg2");
var botonAsistencia3 = document.getElementById("asistenteimg3");

var contadorAsistentes1 = document.getElementById("contadorasistentes1");
var contadorAsistentes2 = document.getElementById("contadorasistentes2");
var contadorAsistentes3 = document.getElementById("contadorasistentes3");


botonCambiar.addEventListener("click", function (){
    imgmapa1.src = "img/mapa-2.png";
    
});



botonCrearEvento.addEventListener("click", function (){
    window.alert("Evento creado!");

});


botonAsistencia1.addEventListener("click", function() {
    // Obtenemos el valor numérico actual del contador
    let contadorActual = parseInt(contadorAsistentes1.innerText) ; // Convertimos el texto en número

    // Incrementamos el contador y actualizamos el texto del elemento
    contadorAsistentes1.innerText = contadorActual + 1;

});

botonAsistencia2.addEventListener("click", function() {
    // Obtenemos el valor numérico actual del contador
    let contadorActual = parseInt(contadorAsistentes2.innerText) ; // Convertimos el texto en número

    // Incrementamos el contador y actualizamos el texto del elemento
    contadorAsistentes2.innerText = contadorActual + 1;

});

botonAsistencia3.addEventListener("click", function() {
    // Obtenemos el valor numérico actual del contador
    let contadorActual = parseInt(contadorAsistentes3.innerText) ; // Convertimos el texto en número 

    // Incrementamos el contador y actualizamos el texto del elemento
    contadorAsistentes3.innerText = contadorActual + 1;

});