let x = "Iniciar sesión"

const cambio = (x) => {
    x.innerText = "Cerrar Sesion";
}

let contador1 = 0;

const meGusta1 = (element) => {
    contador1++;
    element.innerText = contador1 + " me gusta";
};

let contador2 = 0;

const meGusta2 = (element) => {
    contador2++;
    element.innerText = contador2 + " me gusta";
};

const hide = (x) => {
    x.remove();
}

const alerta1 = () => {
    alert('Gato Atigrado was liked')
}

const alerta2 = () => {
    alert('Golden Retriever was liked')
}