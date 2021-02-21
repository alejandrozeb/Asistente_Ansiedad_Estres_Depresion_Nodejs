const {HomeService} = require("../services/index");
class HomeController{}

HomeController.index = (req,res)=>{
    res.send(HomeService.index());
    //res.send("hi desde controller");
};

module.exports = HomeController;