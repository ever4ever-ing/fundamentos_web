class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    comer() {
      return `${this.nombre} está comiendo.`;
    }
  }
  
  class Mascota extends Animal {
    constructor(nombre, tipo) {
      super(nombre);
      this.tipo = tipo;
    }
  
    jugar() {
      return `${this.nombre} está jugando.`;
    }
  }
  
  // Crear instancia de mascota
  const miMascota = new Mascota('Fido', 'perro');
  
  // Acceder a métodos de la clase padre usando super
  console.log(miMascota.comer()); // Output: Fido está comiendo.
  
  // Acceder a métodos de la clase hija
  console.log(miMascota.jugar()); // Output: Fido está jugando.
  