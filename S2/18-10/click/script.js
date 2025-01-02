document.getElementById("colorButton").addEventListener("click", function() {
    cambiarColor();
    //Acá llamamos a la función cambiarColor
});

// Acá tenemos las instrucciones para el cambio de color 
function cambiarColor() {
    var colores = ["#FF6347", "#66CDAA", "#9370DB", "#FFD700", "#4682B4", "#FFA07A"];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    console.log(colorAleatorio);
    document.body.style.backgroundColor = colorAleatorio;
}