const express = require("express");
const router = express.Router();

const Routes = require("./Routes.index");
module.exports = (app) => {
  app.use("/home", Routes.HomeRoute);
  app.use("/personas", Routes.PersonaRoute);
  app.use("/ingresar", Routes.IngresaRoute);
  app.use(router);
};
