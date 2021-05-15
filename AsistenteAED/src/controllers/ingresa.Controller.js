const {PersonaService} = require("../services/index");

class IngresaController {}

IngresaController.index = async (req, res) => {
  res.render("login/login");
};

IngresaController.verificar = async (req, res) => {
  PersonaService.autenticar(req.body);
};

module.exports = IngresaController;
