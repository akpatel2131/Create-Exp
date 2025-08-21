
const successMessage = (message) => {
    return {
        success: true,
        message: message,
    }
}

const errorMessage = (message) => {
    return {
        success: false,
        message: message,
    }
}

module.exports = {
    successMessage,
    errorMessage,
}