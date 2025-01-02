//Acá tenemos la función con las instrucciones
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//Valor de los dos números a comparar
var numero1 = 10;
var numero2 = 7;

//Llamamos a la función y le pasamos los números
//var maximo recibe el número mayor
var maximo = encontrarMaximo(numero1, numero2);

//Vemos por consola los números
console.log("El máximo entre", numero1, "y", numero2, "es:", maximo);