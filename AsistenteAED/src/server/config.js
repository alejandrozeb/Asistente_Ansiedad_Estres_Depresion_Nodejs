const path = require('path');
const morgan = require("morgan");
const multer = require("multer");
const express = require("express");
const errorHandler = require("error-handler");
const routes = require('../routes/index');

module.exports = app =>{
    app.set('port', process.env.PORT || 3000);

    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname,'../views'));


    app.use(morgan('dev'));
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    routes(app);

    app.use('/public', express.static(path.join(__dirname, '../public')));

    if('development' == app.get('env')){
        app.use(errorHandler);
    }

    return app;
}