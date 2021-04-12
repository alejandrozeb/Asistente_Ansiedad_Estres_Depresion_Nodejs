const models = require("../models/index");
class PersonaRepository {
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
