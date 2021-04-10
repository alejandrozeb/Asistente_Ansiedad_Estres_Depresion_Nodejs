const PersonaService = require("../services/PersonaService");
class PersonaController{}

PersonaController.index = (req,res)=>{
    const personas =PersonaService.obtenerPersonas();
    console.log(personas); 
    res.send('hi desde personaController');
    //res.send("hi desde controller");
};

module.exports = PersonaController;