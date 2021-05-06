class ParseDataToJson {
  constructor(data) {
    this.data = data;
  }

  DevolverIdPersonaIdUsuario() {
    let personaId = this.data.id;
    let usuarioId = this.data.Usuario.id;

    let DataJson = this.crearJsonPersonaIdUsuarioId(personaId, usuarioId);
    return DataJson;
  }

  crearJsonPersonaIdUsuarioId(personaId, usuarioId) {
    return {"personaId": personaId, "usuarioId": usuarioId}
  }
}

module.exports = ParseDataToJson;
