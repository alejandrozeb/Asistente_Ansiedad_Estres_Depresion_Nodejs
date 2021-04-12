const PersonaService = require("../services/PersonaService");
class PersonaController{}

PersonaController.index = async (req,res)=>{
    const personas = await PersonaService.obtenerPersonas();
    console.log('hi ' + personas); 
    //res.send(JSON.stringify(personas));
};

module.exports = PersonaController;