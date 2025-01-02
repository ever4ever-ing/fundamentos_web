function donar() {
    alert("¡Gracias por donar a AdoptaTuÁrbol!")
}

function cambiarTexto() {
    var select = document.getElementById("arboles");
    var h2 = document.querySelector("h2.mostrando");
    h2.textContent = "Mostrando: " + select.value;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".boton-cambiar").forEach(function(boton) {
        boton.addEventListener("click", function() {
            this.innerText = "Adoptado";
            this.style.backgroundColor = "#274e13"; 
            this.style.color = "#ffffff"; 
        });
    });
});
