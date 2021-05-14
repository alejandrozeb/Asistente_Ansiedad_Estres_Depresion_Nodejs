class IngresaController {}

IngresaController.index = async (req, res) => {
  res.render("login/login");
};

IngresaController.verificar = async (req, res) => {
  console.log(req.body);
};

module.exports = IngresaController;
