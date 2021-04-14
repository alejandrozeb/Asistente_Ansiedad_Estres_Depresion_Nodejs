const {Router} = require("express");
const router = Router();
const controllers = require("../controllers");

router.get('/personas', controllers.PersonaController.index);

module.exports = router;