const {Router} = require("express");
const router = Router();
const controllers = require("../controllers");
router.get('/home', ()=>{console.log('hola desde home')});

module.exports = router;