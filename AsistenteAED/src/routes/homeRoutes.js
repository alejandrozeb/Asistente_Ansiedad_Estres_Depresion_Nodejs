const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", controllers.HomeController.index);
router.get("/home1", (req, res) => {
  res.send("hi");
});

module.exports = router;
