export default class Usuario {
  constructor(id, nombre, fechaCreacion) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion || new Date().toISOString();
  }

  static validar(nombre) {
    if (!nombre || nombre.trim().length < 3) {
      throw new Error("El nombre debe tener mínimo 3 caracteres");
    }
    return true;
  }
}
