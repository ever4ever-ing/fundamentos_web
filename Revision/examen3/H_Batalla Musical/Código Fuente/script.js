function votar(id) {
    let cantidad = parseInt(document.querySelector("#votos-"+id).innerText);
    cantidad++;
    document.querySelector("#votos-"+id).innerText = cantidad;
}

function alerta() {
    alert("Aplicando Filtros ...");
}