//boton iniciar sesion
let botonIniciar = (element) =>{
    element.innerText = "Cerrar sesion"
} 

let desaparecer = (element) =>{
    element.remove();
}

let contadorgato = 0;
let megustaGato = (element) =>{
    contadorgato++; 
    element.innerText = contadorgato + " me gusta";
}

let contadorgolden = 0;
let megustaGolden = (element) =>{
    contadorgolden++; 
    element.innerText = contadorgolden + " me gusta";
}

let alertaGatoAtigrado = (element) =>{
    alert("Gato atrigrado was like");
}

let alertaGoldenRetriever = (element) =>{
    alert("Golden Retriever was like");
}


