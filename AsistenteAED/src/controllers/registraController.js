const {PersonaService} = require("../services/index");

class RegistraController{}

RegistraController.index = async (req,res)=>{ 
    res.render("registrar/registrar");
};

RegistraController.guardar = async (req, res) =>{
    PersonaService.guardar();
    console.log(req.body);
}

module.exports = RegistraController;