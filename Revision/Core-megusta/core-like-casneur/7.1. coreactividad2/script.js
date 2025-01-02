// Variables para los contadores de likes
let likesCount1 = 0;
let likesCount2 = 0;
let likesCount3 = 0;

// Obtener los botones y contadores de likes
const likeBtn1 = document.querySelector('#like-btn-1');
const likeBtn2 = document.querySelector('#like-btn-2');
const likeBtn3 = document.querySelector('#like-btn-3');

const likesDisplay1 = document.querySelector('#likes1');
const likesDisplay2 = document.querySelector('#likes2');
const likesDisplay3 = document.querySelector('#likes3');

// Agregar eventos de clic para cada botón
likeBtn1.addEventListener('click', () => {
    likesCount1++;
    likesDisplay1.textContent = `${likesCount1} like(s)`;
});

likeBtn2.addEventListener('click', () => {
    likesCount2++;
    likesDisplay2.textContent = `${likesCount2} like(s)`;
});

likeBtn3.addEventListener('click', () => {
    likesCount3++;
    likesDisplay3.textContent = `${likesCount3} like(s)`;
});

