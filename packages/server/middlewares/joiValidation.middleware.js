const Joi = require("joi");
const commonRes = require("../utils/commonRes");
module.exports = (schema = Joi.object({}), errMsg = {}, content = "body") => {
    return async (req, res, next) => {
        try {
            const value = await schema.validateAsync(req[content]);
            next();
        } catch (error) {
            console.log("error:", JSON.stringify(error, null, 4))
            commonRes.error(
                res, 
                error.message ? error.message : errMsg[error.details[0].context.key], 
                "Validation Error, please check your input.", 403
            )
        }
    }
}