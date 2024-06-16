const Joi = require("joi");
const CreateIssuesJoi = {
    rules: Joi.object({
      Return: Joi.object({
        Location: Joi.string().required(),
        DateTime: Joi.date().iso(),
      }).required(),
      Vehicles: Joi.array()
        .items(
          Joi.object({
            Number: Joi.string().required(),
            OdometerIn: Joi.number().required(),
          })
        )
        .min(1)
        .max(999999)
        .required(),
      TransportFee: Joi.number(),
      Note: Joi.string(),
      CheckInStatus: Joi.string(),
      FuelTankIn: Joi.number(),
    }).required(),
  }
module.exports = {
    CreateIssuesJoi,    
};
