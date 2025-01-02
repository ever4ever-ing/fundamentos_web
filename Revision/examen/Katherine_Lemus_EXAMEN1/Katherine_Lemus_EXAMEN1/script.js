


/*-----------Crea el mensaje de Alerta cuando el usuario da click en el botón "Donar" de la parte superior derecha----*/

button2.addEventListener("click", function () {
    alert("¡Gracias por donar a AdoptaTuÁrbol!")
});


/*--------------- Permite cambiar el texto del botón de cada arbol de "Adoptar" a "Adoptado"--------------------------*/

let cambiar = (element) => {
    if (element.innerText === 'Adoptar') {
        element.innerText = 'Adoptado';
        element.style.backgroundColor = 'RGB(39, 78, 19)';
        element.style.color = 'white';

    } else { 
        element.innerText = 'Adoptar';
        element.style.backgroundColor = 'RGB(184, 217, 170)';
        element.style.color = 'black';
        
    }    
}

/*----------------Permite cambiar el titulo de "Mostrando: Todos los árboles" a "Mostrando: Árboles Frutales--------- */

var select1 = document.querySelector('#select1');
var select2 = document.querySelector('#select2');

select1.addEventListener('click', function () { changePage(this) });
select2.addEventListener('click', function () { changePage(this) });

const h1 = document.querySelector('.texto2 h1');

const changePage = (element) => {
    if (element.id === 'select1') {
        h1.innerText = 'Mostrando: Árboles Frutales';

    } else if (element.id === 'select2') {
        h1.innerText = 'Mostrando: Todos los Árboles'; 
        
    }
};






