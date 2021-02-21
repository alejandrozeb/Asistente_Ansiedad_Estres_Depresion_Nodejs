const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes.js");
module.exports = app => {
    app.use(homeRoutes);
    app.use(router);
};