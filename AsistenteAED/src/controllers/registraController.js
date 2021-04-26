class RegistraController{}

RegistraController.index = async (req,res)=>{ 
    res.render("registrar/registrar");
};

module.exports = RegistraController;