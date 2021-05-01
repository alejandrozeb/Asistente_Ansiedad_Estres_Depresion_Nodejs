const PersonaRepository = require("../repositories/personaRepostitory");
class PersonaService {
  static async obtenerPersonas() {
    let personas = await PersonaRepository.obtenerTodos();
    return JSON.stringify(personas);
  }

  static async guardar(data) {
    let { Nombre, Telefono, Genero, Email, Password } = data;

    let persona = new PersonaRepository(
      Nombre,
      Telefono,
      Genero,
      Email,
      Password
    );
    
    console.log("desde servicio");
    /* const guardarPersona = await persona.guardarPersona();
    console.log(guardarPersona);
    const guardarUsuario = await persona.guardarUsuario(guardarPersona.id); 
    console.log(guardarUsuario); */
    //console.log(Nombre, Telefono, Genero, Email, Password);

    const guardarPersona2= await persona.guardarPersona2();
  }
}

module.exports = PersonaService;
//logica de negocio
