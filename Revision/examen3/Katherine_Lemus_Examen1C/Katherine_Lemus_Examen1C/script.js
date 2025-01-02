
/* Mensaje de Alerta */
filtrar.addEventListener("click", function () {
    alert("Aplicando Filtros...")
});



/* Contador de votos */

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".buttons");
    let counters = document.querySelectorAll(".counter");


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let currentCounter = counters[index];
            let count = currentCounter.innerText;
            currentCounter.innerText = ++count;
        });

    });

});
