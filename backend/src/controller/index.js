const service = require("../service");
const { successMessage, errorMessage } = require("../utils/message");


const getUserList = (req, res) => {
    try {
        const user = service.fetchUserList(req.query);
        res.status(200).json(successMessage(user));
    } catch (error) {
        res.status(500).json(errorMessage(error.message));
    }
}; 

const createUser = (req, res) => {
    try {
        const user = service.createUser(req.body);
        res.status(200).json(successMessage(user));
    } catch (error) {
        res.status(500).json(errorMessage(error.message));
    }
};


module.exports = {
    getUserList,
    createUser,
}