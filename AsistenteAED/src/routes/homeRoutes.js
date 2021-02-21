const {Router} = require("express");
const router = Router();

router.get('/home', ()=>{console.log('hola desde home')});

module.exports = router;