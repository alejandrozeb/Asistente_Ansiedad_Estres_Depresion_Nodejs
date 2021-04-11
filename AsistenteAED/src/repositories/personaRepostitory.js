const  models  = require("../models/index");
class PersonaRepository {
  static async getAll() {
    let personaquery = await models.Persona.findAll();
    return personaquery;
    
    
    //console.log("All users:", JSON.stringify(personas, null, 2));
    
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
