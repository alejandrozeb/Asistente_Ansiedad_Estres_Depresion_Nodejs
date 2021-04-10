const PersonaRepository = require('../repositories/personaRepostitory');
class PersonaService{
    static obtenerPersonas(){
        let personas = PersonaRepository.getAll();
        return personas;
    }
}

module.exports = PersonaService;
//logica de negocio