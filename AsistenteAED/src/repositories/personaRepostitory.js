const models = require("../models/index");
class PersonaRepository {
  constructor(data){
    this.nombre
    this.telefono
    this.genero
    this.email
    this.password
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
