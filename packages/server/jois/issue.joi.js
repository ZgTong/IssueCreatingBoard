const Joi = require("joi");
const CreateIssuesJoi = {
    rules: Joi.object({
      title: Joi.string(),
      description: Joi.string()
    }).required(),
  }
  const UpdateIssueJoi = {
    rules: Joi.object({
      title: Joi.string(),
      description: Joi.string()
    }),
  }
module.exports = {
    CreateIssuesJoi, 
    UpdateIssueJoi,
};
