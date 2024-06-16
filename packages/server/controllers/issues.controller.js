const { dbConnection, saveData } = require("../utils/dbConnection");
const commonRes = require("../utils/commonRes");
class IssuesController {
  getIssue = async (req, res, next) => {
    try {
      const { id } = req.params;
      const db = await dbConnection();
      console.log("db", db.issues, id)
      const issue = db.issues.find((issue) => issue.id == id);
      if(issue) {
        return commonRes(res, issue);
      }else{
        return commonRes.error(res, null, "Issue not found", 404);
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = IssuesController;
