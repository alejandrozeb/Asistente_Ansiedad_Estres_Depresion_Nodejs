const {PersonaService} = require("../services/index");

class RegistraController{}

RegistraController.index = async (req,res)=>{ 
    res.render("registrar/registrar");
};

RegistraController.guardar = async (req, res) =>{
   let dataIds = await PersonaService.guardar( req.body);
   console.log(dataIds);
   //deberia llamar a otra ruta
   res.render("principal/principal", {dataIds});
}

module.exports = RegistraController;