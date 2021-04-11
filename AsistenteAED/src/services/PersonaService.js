const PersonaRepository = require('../repositories/personaRepostitory');
class PersonaService{
    static async obtenerPersonas(){
        try {
           let personas = PersonaRepository.getAll();
           console.log(personas);   
        } catch (t) {
            console.log('hiiiiiiiii ' + t);
        }
    }
}

module.exports = PersonaService;
//logica de negocio