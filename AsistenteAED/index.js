const express = require("express");
const sequelize = require("./src/config/database");
const config = require("./src/server/config");

const app = config(express());

app.listen(app.get('port'),async ()=>{
    console.log('Server on port', app.get('port'));
    await sequelize.sync({ force: true}).then(()=>{
        console.log("Tablas creadas");
    }).catch(error =>{
        console.log("error: ", error);
    })

});