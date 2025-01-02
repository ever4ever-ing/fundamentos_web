/*
Imprimir pares del 1 al 30: Usando un bucle, escribe un código que imprima todos los números pares del 1 al 30. 
*/
console.log('-------------------');
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log('Otra forma de hacerlo');
for (let i =2; i<=30; i+=2){
    console.log(i);
}
console.log('-------------------');

/*
Imprimir múltiplos de 4 en orden descendente: Utilizando un bucle, escribe un código que imprima todos los
números que sean múltiplos de 4 en orden descendente, desde 100 hasta 0. ¡Inténtalo!
*/

for(let i =100; i>=0; i--){
    if(i%4==0){
        console.log(i);
    }
}
console.log('-------------------');
/*
Imprime la secuencia: Esta vez, queremos imprimir una secuencia un poco diferente.
Utiliza un bucle para imprimir los siguientes valores: 10, 7, 4, 1, -2, -5.
*/
for(let i =10;i>=-5;i-=3){
    console.log(i);
}
console.log('-------------------');
/*
Suma todos los números pares del 1 al 50: Utiliza un bucle para sumar todos los números pares del 1 hasta el 50 y
muestra el resultado de la suma con console log.
*/

let suma = 0;
for(let i =1; i<=50; i++){
    if(i%2==0){
        suma+=i;
        console.log(suma);
    }
}
console.log('Resultado de la suma de los pares del 1 al 50: '+ suma);
console.log('-------------------');
/*
Factorial: Para este último desafío, necesitamos multiplicar todos los números del 1 al 20.
 Es decir, 1 * 2 * 3 * … * 18 * 19 * 20. ¿Puedes calcular el producto final?
*/

let factorial = 1;
for(let i =1; i<=20; i++){
    factorial*=i;
}
console.log('Resultado total del factorial de 20: '+ factorial);