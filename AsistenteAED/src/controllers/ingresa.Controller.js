class IngresaController{}

IngresaController.index = async (req,res)=>{ 
    res.render("login/login");
};

module.exports = IngresaController;