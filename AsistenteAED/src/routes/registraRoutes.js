const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", controllers.RegistraController.index);

module.exports = router;
