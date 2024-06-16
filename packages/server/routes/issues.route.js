const express = require("express");
const IssueController = require("../controllers/issues.controller");
class IssueRoute {
    path = "/issues";
    issueController = new IssueController();
    router = express.Router();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.issueController.getIssue);
    }
};

module.exports = IssueRoute;