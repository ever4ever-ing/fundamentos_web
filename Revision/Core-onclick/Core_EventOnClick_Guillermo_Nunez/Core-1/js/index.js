const boton = document.getElementById('login');

var botoniniciar = document.getElementById("login");
botoniniciar.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});

botoniniciar.addEventListener("click", function(){
    alert("Has iniciado sesion")
})

var contador = 0;
var botonmegusta = document.getElementById("like")

botonmegusta.addEventListener("click", function(){
    alert("Caracal Was liked");
    contador++;
    botonmegusta.textContent = contador + "Me gusta";
})
var botonmegusta1 = document.getElementById("like1")

botonmegusta1.addEventListener("click", function(){
    alert("Gato montes Was liked");
    contador++;
    botonmegusta1.textContent = contador + "Me gusta";
})

const boton0 = document.getElementById("adds");

var agregar = document.getElementById("adds");
agregar.addEventListener("click", function(){
    this.remove();
})
