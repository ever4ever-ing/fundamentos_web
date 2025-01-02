let frutas = ["manzana", "pera", "uva", "fresa"];

frutas.push("kiwi");


// Agrega un elemento al inicio del array
frutas.unshift("naranja");
console.log(frutas);

//Elimina el elemento inicial del array
frutas.shift();
console.log(frutas);
//Reordena el array inversamente
frutas.reverse();
console.log(frutas);
//Ordena el array alfabéticamente
frutas.sort();
console.log(frutas);

let frutasLargas = frutas.filter(fruta => fruta.length > 5);
console.log(frutasLargas);