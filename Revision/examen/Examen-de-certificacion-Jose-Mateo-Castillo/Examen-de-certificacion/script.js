
//Alerta boton donar
let alertaBotonDonar = (element) => {
    alert("¡Gracias por donar a AdoptaTuÁrbol!");
}

//Cambiar texto y color en el boton de adoptar donde se encuentran los arboles
let cambiarTextoAdoptar = (element) => {
    element.innerText = "Adoptado";
    element.style.backgroundColor = "#274f13ff";
    element.style.color = "white";
}

//Cambiar texto en el div1-b cuando se seleccionara la opcion en el select
let texto = document.getElementById("mostrando");
let select = document.getElementById("arboles");
let cambiarTextoSelect = (element) => {
    if (select.value === "Alamo") {
        texto.innerText = "Mostrando: Álamo";
    } else if (select.value === "Fresno") {
        texto.innerText = "Mostrando: Fresno";
    } else if (select.value === "Pino") {
        texto.innerText = "Mostrando: Pino";
    } else if (select.value === "Jacaranda") {
        texto.innerText = "Mostrando: Jacaranda";
    } else {
        texto.innerText = "Mostrando: Todos los Árboles";
    }
}



