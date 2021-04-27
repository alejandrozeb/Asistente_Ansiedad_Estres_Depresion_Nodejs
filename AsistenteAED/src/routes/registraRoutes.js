const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", controllers.RegistraController.index);
router.post("/GuardarUsuario", controllers.RegistraController.guardar);

module.exports = router;
