const button = document.querySelector('#liked1');
const contadorElement = document.querySelector('#contador1');

let contador1 = 0

button.addEventListener('click', function() {
    contador1++;

    contadorElement.textContent = contador1 + " Like(s)"
});

const button2 = document.querySelector('#liked2');
const contadorElement2 = document.querySelector('#contador2');

let contador2 = 0

button2.addEventListener('click', function() {
    contador2++;

    contadorElement2.textContent = contador2 + " Like(s)"
});

const button3 = document.querySelector('#liked3');
const contadorElement3 = document.querySelector('#contador3');

let contador3 = 0

button3.addEventListener('click', function() {
    contador3++;

    contadorElement3.textContent = contador3 + " Like(s)"
});