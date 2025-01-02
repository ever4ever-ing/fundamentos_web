class Mascota {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  
    static descripcion() {
      return 'Las mascotas son compañeros leales';
    }
  
    static mostrarInfo(mascota) {
      return `${mascota.nombre} es un ${mascota.tipo}.`;
    }
  }
  
  // Crear instancias de mascotas
  const perro = new Mascota('Cirilo', 'perro');
  const gato = new Mascota('Garu', 'gato');
  
  // Usar método estático para descripción general de mascotas
  console.log(Mascota.descripcion());
  
  // Usar método estático para mostrar información de una mascota
  console.log(Mascota.mostrarInfo(perro));
  console.log(Mascota.mostrarInfo(gato));
  