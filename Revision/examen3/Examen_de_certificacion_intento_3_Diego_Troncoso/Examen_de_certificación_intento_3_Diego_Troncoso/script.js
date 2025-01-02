document.addEventListener("DOMContentLoaded", function () {


    let buttons = document.querySelectorAll(".btnvotarjs");
    let counters = document.querySelectorAll(".contador");


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let currentCounter = counters[index]; 
            let count = currentCounter.innerText; 
            currentCounter.innerText = ++count; 
            button.style.backgroundColor = 'black'
            button.style.color = 'white'
        });
    });

});

document.getElementById("btn2").addEventListener("click", function() {
    alert("Aplicando Filtros...");
});