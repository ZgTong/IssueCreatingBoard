const express = require("express");
const hpp = require("hpp");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");

function initializeMiddlewares(app) {
    let corsOptions = {
        origin: "*",
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "*",
        exposedHeaders: "*",
        preflightContinue: false,
    }
    console.log(corsOptions);
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(hpp());
    app.use(helmet());
}

module.exports = initializeMiddlewares;
