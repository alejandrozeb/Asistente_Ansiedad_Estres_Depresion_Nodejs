const {PersonaService} = require("../services/index");
class PersonaController{}

PersonaController.index = (req,res)=>{
    res.send(PersonaService.obtenerPersonas());
    //res.send("hi desde controller");
};

module.exports = PersonaController;