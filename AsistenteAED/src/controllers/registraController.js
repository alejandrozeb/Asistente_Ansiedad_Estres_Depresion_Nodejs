class RegistraController{}

RegistraController.index = async (req,res)=>{ 
    res.render("registrar/registrar");
};

RegistraController.guardar = async (req, res) =>{
    console.log(req.body);
}

module.exports = RegistraController;