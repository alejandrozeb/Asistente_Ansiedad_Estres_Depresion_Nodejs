const {PersonaService} = require("../services/index");

class RegistraController{}

RegistraController.index = async (req,res)=>{ 
    res.render("registrar/registrar");
};

RegistraController.guardar = async (req, res) =>{
    PersonaService.guardar( req.body);
}

module.exports = RegistraController;