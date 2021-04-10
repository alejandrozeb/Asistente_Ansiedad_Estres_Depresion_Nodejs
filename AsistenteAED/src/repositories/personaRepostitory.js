const  Persona  = require("../models/persona");
class PersonaRepository {
  static  getAll() {
    //console.log('hi desde repository');
    return Persona.findAll();
    
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
