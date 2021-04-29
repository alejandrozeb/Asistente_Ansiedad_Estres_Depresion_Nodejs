const PersonaRepository = require('../repositories/personaRepostitory');
class PersonaService{

    static async obtenerPersonas(){
        let personas = await PersonaRepository.obtenerTodos()
        return JSON.stringify(personas);
    }

    static async guardar(data){
        let persona = new PersonaRepository;

    }
}

module.exports = PersonaService;
//logica de negocio