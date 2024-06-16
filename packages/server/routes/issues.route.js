const express = require("express");
const IssuesController = require("../controllers/issues.controller");
class IssueRoute {
    path = "/issues";
    issuesController = new IssuesController();
    router = express.Router();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.issuesController.getIssue);
    }
};

module.exports = IssueRoute;