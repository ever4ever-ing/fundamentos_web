document.addEventListener("DOMContentLoaded", function() {
  // Configuración para el primer botón y contador
  const botonMeGusta1 = document.getElementById("botonMeGusta1");
  const contador1 = document.getElementById("contador1");
  let numeroDeMeGusta1 = 0;

  botonMeGusta1.addEventListener("click", function() {
    numeroDeMeGusta1++;
    contador1.textContent = `${numeroDeMeGusta1} Me gusta`; 
    alert("¡Gracias por tu Me gusta!");
  });

  // Configuración para el segundo botón y contador
  const botonMeGusta2 = document.getElementById("botonMeGusta2");
  const contador2 = document.getElementById("contador2");
  let numeroDeMeGusta2 = 0;

  botonMeGusta2.addEventListener("click", function() {
    numeroDeMeGusta2++;
    contador2.textContent = `${numeroDeMeGusta2} Me gusta`; 
    alert("¡Gracias por tu Me gusta!");
  });

  // Configuración para el tercer botón y contador
  const botonMeGusta3 = document.getElementById("botonMeGusta3");
  const contador3 = document.getElementById("contador3");
  let numeroDeMeGusta3 = 0;

  botonMeGusta3.addEventListener("click", function() {
    numeroDeMeGusta3++;
    contador3.textContent = `${numeroDeMeGusta3} Me gusta`; 
    alert("¡Gracias por tu Me gusta!");
  });
});
