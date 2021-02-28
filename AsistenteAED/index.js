const express = require("express");
const sequelize = require("./src/config/database");
const config = require("./src/server/config");

const app = config(express());

app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
    sequelize.sync({ force: true}).then(()=>{
        console.log("conectado");
    }).catch(error =>{
        console.log("error: ", error);
    })

});