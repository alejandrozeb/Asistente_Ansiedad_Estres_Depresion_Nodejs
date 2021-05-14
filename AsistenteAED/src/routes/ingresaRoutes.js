const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const { route } = require("./homeRoutes");

router.get("/", controllers.IngresaController.index);

router.post("/Verificar", controllers.IngresaController.verificar);

module.exports = router;
