const express = require("express");
const router = express.Router();

const Routes = require("./controllers.index");
module.exports = app => {
    app.use(Routes);
    app.use(router);
};