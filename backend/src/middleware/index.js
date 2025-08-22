const joi = require("joi");
const { errorMessage } = require("../utils/message");

const schema = joi.object({
    name: joi.string().required("name is required"),
    clientType: joi.string().valid("Individual", "Company").required("clientType is required"),
    email: joi.string().required("email is required"),
    status: joi.string().valid("Active", "Inactive").required("status is required"),
});

const validateUser = (req, res, next) => {
    const {error, value} = schema.validate(req.body);
    if (error) {
        return res.status(400).json(errorMessage(error.message));
    }
    req.body = value;
    next();
};

module.exports = validateUser;