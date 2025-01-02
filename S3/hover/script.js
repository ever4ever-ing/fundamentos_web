const boton = document.getElementById('miBoton');
var contador = 0;
boton.addEventListener('mouseover', function () {
    console.log('El ratón está sobre el botón');
    contador++;
    console.log(contador);
});

boton.addEventListener('mouseout', function () {
    console.log('El ratón ha salido del botón');
});

// ALT + SHIFT + F formateo el código

