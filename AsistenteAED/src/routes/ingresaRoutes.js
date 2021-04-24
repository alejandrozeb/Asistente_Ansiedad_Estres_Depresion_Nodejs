const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", controllers.IngresaController.index);

module.exports = router;
