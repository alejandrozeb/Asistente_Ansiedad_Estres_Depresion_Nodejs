const PersonaService = require("../services/PersonaService");
class PersonaController{}

PersonaController.index = (req,res)=>{
    const personas =PersonaService.obtenerPersonas(); 
    res.send(personas);
};

module.exports = PersonaController;