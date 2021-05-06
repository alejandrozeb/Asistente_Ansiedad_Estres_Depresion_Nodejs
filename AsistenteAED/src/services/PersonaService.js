const PersonaRepository = require("../repositories/personaRepostitory");
const PasswordBcrypt = require("../security/PasswordBcrypt");
const ParseToJson = require("../communication/parseToJson");

class PersonaService {
  static async obtenerPersonas() {
    let personas = await PersonaRepository.obtenerTodos();
    return JSON.stringify(personas);
  }

  static async guardar(data) {
    let { Nombre, Telefono, Genero, Email, Password } = data;

    let passwordBcrypt = new PasswordBcrypt("123456");
    let passwordHash = passwordBcrypt.encriptar();

    let persona = new PersonaRepository(
      Nombre,
      Telefono,
      Genero,
      Email,
      passwordHash
    );
    let guardarPersona = await persona.guardarPersona();

    let dataJson = new ParseToJson(guardarPersona);
    let JsonDataIds = dataJson.DevolverIdPersonaIdUsuario();    
    
    return JsonDataIds;
  }
}

module.exports = PersonaService;
