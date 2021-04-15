const {HomeService} = require("../services/index");
class HomeController{}

HomeController.index = (req,res)=>{
    home = HomeService.index();
    res.render('main');
};

module.exports = HomeController;