const { Persona } = require("../models/persona");
class PersonaRepository {
  getAll() {
    return Persona.findAll();
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

module.exports = Persona;
