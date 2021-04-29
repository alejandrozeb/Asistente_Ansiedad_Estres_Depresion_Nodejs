const models = require("../models/index");
class PersonaRepository {
  constructor(Nombre, Telefono, Genero, Email, Password){
    this.nombre = Nombre;
    this.telefono = Telefono;
    this.genero = Genero;
    this.email = Email;
    this.password = Password;
  }

  static obtenerTodos() {
    return models.Persona.findAll();
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
