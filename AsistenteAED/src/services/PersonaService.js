const PersonaRepository = require('../repositories/personaRepostitory');
class PersonaService{
    static async obtenerPersonas(){
        let personas = await PersonaRepository.obtenerTodos()
        return JSON.stringify(personas);
    }
}

module.exports = PersonaService;
//logica de negocio