function donar() {
    alert("¡Gracias por donar a AdoptaTuÁrbol!")
}

function adoptar(boton) {
    boton.style.backgroundColor = "#274e13";
    boton.style.color = "white";
    boton.innerText = "Adoptado";
}

function filtrar(selector) {
    document.querySelector('.mostrando').innerText = selector.value;
}