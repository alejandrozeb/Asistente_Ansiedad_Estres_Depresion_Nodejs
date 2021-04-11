const models = require("../models/index");
class PersonaRepository {
  static async obtenerTodos() {
    let personaquery = await models.Persona.findAll();
    return JSON.stringify(personaquery);
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
