const PersonaRepository = require('../repositories/personaRepostitory');
class PersonaService{
    static obtenerPersonas(){
        PersonaRepository.obtenerTodos()
        .then((resultado)=>{
            let data = JSON.parse(resultado);
            return data;
        });
    }
}

module.exports = PersonaService;
//logica de negocio