// Seleccionamos los elementos necesarios
const likeButton = document.querySelector('#like-button');
const likeCount = document.querySelector('#like-count');

// Inicializamos el contador de likes
let likes = 0;

// Agregamos un evento al botón de like
likeButton.addEventListener('click', () => {
    // Incrementamos el contador de likes
    likes++;
    
    // Actualizamos el texto de los likes
    likeCount.textContent = `${likes} like(s)`;
});
