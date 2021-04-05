const {Sequelize} = require("sequelize");
const {database} = require("./config2");
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,
    {
        port: database.port,
        host: database.host,
        dialect: "mysql",
        define:{
            timestamps: false
        },
        pool:{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: 0
    }
);


module.exports = sequelize;
