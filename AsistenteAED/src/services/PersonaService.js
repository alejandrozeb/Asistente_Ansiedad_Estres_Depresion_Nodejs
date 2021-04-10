const {PersonaRepository} = require('../repositories/index');
class PersonaService{
    obtenerPersonas(){
        let personas = PersonaRepository.getAll();
        return personas;
    }
}

module.exports = PersonaService;
//logica de negocio