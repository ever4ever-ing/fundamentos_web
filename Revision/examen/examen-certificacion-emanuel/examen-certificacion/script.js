document.addEventListener("DOMContentLoaded", function () {

    //alerta emitida del boton donar
    let boton = document.getElementById("donar");

    //cambiar seguidamente el texto varias veces del adoptar
    const adoptar = document.querySelectorAll("#adoptar");

    //para cambiar el texto a cada opcion seleccionada
    const cambiaArboles = document.getElementById("cambiaArboles");
    const seleccionar = document.getElementById("seleccionar");


    //alerta emitida del boton donar
    boton.addEventListener("click", function () {
        alert("¡Gracias por donar a AdoptaTuÁrbol!")

    })


    //cambiar seguidamente el texto varias veces del adoptar a adoptado
    adoptar.forEach(function (editButton) {
        editButton.addEventListener("click", function () {
            if (this.innerText === "Adoptar") {
                this.innerText = "Adoptado";
                this.style.backgroundColor = "green";
            }
            else {
                this.innerText = "Adoptar";
                this.style.backgroundColor = "";
            }
        });
    });

    // de esta forma si pude entender el cambio al seleccionar tipos de arboles del select
    seleccionar.addEventListener("change", function () {
        const opcionSeleccionada = seleccionar.value;
        if (opcionSeleccionada === "Todos") {
            cambiaArboles.innerText = " Todos los Árboles";
        }
        else if (opcionSeleccionada === "Frutales") {
            cambiaArboles.innerText = " Árboles Frutales";
        }
        else if (opcionSeleccionada === "Flores") {
            cambiaArboles.innerText = " Árboles de Flores";
        }
        else if (opcionSeleccionada === "Ornamentales") {
            cambiaArboles.innerText = " Árboles Ornamentales";
        }

    })

});