const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", controllers.IngresaController.index);

router.post("/verificar", controllers.IngresaController.verificar);

module.exports = router;
