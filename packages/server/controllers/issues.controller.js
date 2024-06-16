const { dbConnection, saveData } = require("../utils/dbConnection");
const commonRes = require("../utils/commonRes");
class IssuesController {
  getIssueList = async (req, res, next) => {
    try {
      const db = await dbConnection();
      //fileter all open issues
      const results = db.issues.filter((issue) => issue.status === "open");
      return commonRes(res, results);
    } catch (error) {
      next(error);
    }
  };

  getIssue = async (req, res, next) => {
    try {
      const { id } = req.params;
      const db = await dbConnection();
      console.log("db", db.issues, id);
      const issue = db.issues.find((issue) => issue.id == id);
      if (issue) {
        return commonRes(res, issue);
      } else {
        return commonRes.error(res, null, "Issue not found", 404);
      }
    } catch (error) {
      next(error);
    }
  };

  createIssue = async (req, res, next) => {
    try {
      const { title, description } = req.body;
      const db = await dbConnection();
      const issue = {
        id: db.issues.length + 1,
        title,
        description,
        status: "open",
      };
      db.issues.push(issue);
      await saveData(db);
      return commonRes(res, issue);
    } catch (error) {
      next(error);
    }
  };

  updateIssue = async (req, res, next) => {
    try {
      const { title, description } = req.body;
      const { id } = req.params;
      const db = await dbConnection();
      const issue = db.issues.find((issue) => issue.id == id);
      if (issue) {
        issue.title = title;
        issue.description = description;
        await saveData(db);
        return commonRes(res, issue);
      } else {
        return commonRes.error(res, null, "Issue not found", 404);
      }
    } catch (error) {
      next(error);
    }
  };

  deleteIssue = async (req, res, next) => {
    try {
      const { id } = req.params;
      const db = await dbConnection();
      const issueIndex = db.issues.findIndex((issue) => issue.id == id);
      if (issueIndex !== -1) {
        //update status to closed
        db.issues[issueIndex].status = "closed";
        await saveData(db);
        return commonRes(res, null, "Issue closed successfully");
      } else {
        return commonRes.error(res, null, "Issue not found", 404);
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = IssuesController;
