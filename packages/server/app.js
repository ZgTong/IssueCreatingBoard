const initializeMiddlewares = require("./middlewares");
const express = require("express");

class App {
    constructor() {
        this.app = express();
    }
    getServer() {
        return this.app;
    }
    async init(routes){
        initializeMiddlewares(this.app);
        this.initializeRoutes(routes);
    }
    initializeRoutes(routes) {
        routes.forEach(route => this.app.use("/", route.router));
    }
}

module.exports = App;