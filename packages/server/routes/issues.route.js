const express = require("express");
const IssuesController = require("../controllers/issues.controller");
const {CreateIssuesJoi, UpdateIssueJoi} = require("../jois/issue.joi");
const joiValidate = require("../middlewares/joiValidation.middleware");
class IssueRoute {
    path = "/issues";
    issuesController = new IssuesController();
    router = express.Router();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.issuesController.getIssueList);
        this.router.get(`${this.path}/:id`, this.issuesController.getIssue);
        this.router.post(`${this.path}`, joiValidate(CreateIssuesJoi.rules, CreateIssuesJoi.errMsg), this.issuesController.createIssue);
        this.router.post(`${this.path}/:id`, joiValidate(UpdateIssueJoi.rules, UpdateIssueJoi.errMsg), this.issuesController.updateIssue);
        this.router.delete(`${this.path}/:id`, this.issuesController.deleteIssue);
    }
};

module.exports = IssueRoute;