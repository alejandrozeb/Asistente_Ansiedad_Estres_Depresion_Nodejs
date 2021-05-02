const models = require("../models/index");
class PersonaRepository {
  constructor(Nombre, Telefono, Genero, Email, Password) {
    this.nombre = Nombre;
    this.telefono = Telefono;
    this.genero = Genero;
    this.email = Email;
    this.password = Password;
  }

  static obtenerTodos() {
    return models.Persona.findAll();
  }

  guardarPersona() {
    return models.Persona.create({
      p_email: this.email,
      p_password: this.password,
      Usuario: {
        u_nombre: this.nombre,
        u_telefono: this.telefono,
        u_genero: this.genero,        
      }
    },{
      include:[models.Usuario],
    });
  }

  get(idPersona) {
    return Persona.find({
      where: {
        id: idPersona,
      },
    });
  }

  create() {}

  update() {}
}

module.exports = PersonaRepository;
