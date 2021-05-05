const PersonaRepository = require("../repositories/personaRepostitory");
const PasswordBcrypt = require("../security/PasswordBcrypt");

class PersonaService {
  static async obtenerPersonas() {
    let personas = await PersonaRepository.obtenerTodos();
    return JSON.stringify(personas);
  }

  static async guardar(data) {
    let { Nombre, Telefono, Genero, Email, Password } = data;

    //tratar password
    let passwordEncriptado = new PasswordBcrypt("123456");
    passwordEncriptado.encriptar();


    /* let persona = new PersonaRepository(
      Nombre,
      Telefono,
      Genero,
      Email,
      Password
    );
    const guardarPersona = await persona.guardarPersona(); */
  }
}

module.exports = PersonaService;
//logica de negocio
