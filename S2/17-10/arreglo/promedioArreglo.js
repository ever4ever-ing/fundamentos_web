const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const costs = [1000, 2000, 3000, 4000, 5000, 6000, 7000];


let sumaTotal = 0;

for (let i=0; i<days.length; i++){
    sumaTotal += costs[i];
}

numeroDias = days.length;
promedio = sumaTotal / numeroDias;
console.log("El promedio es: $",promedio, "CLP"); 
