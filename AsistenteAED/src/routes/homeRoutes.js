const {Router} = require("express");
const router = Router();
const controllers = require("../controllers");

router.get('/home', controllers.HomeController.index);
router.get('/home1', (req,res)=>{res.send("hi")});
router.get('/personas', controllers.PersonaController.index);

module.exports = router;