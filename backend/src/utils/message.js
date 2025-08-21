
const successMessage = (data) => {
    return {
        success: true,
        data,
    }
}

const errorMessage = (message) => {
    return {
        success: false,
        error: message,
    }
}

module.exports = {
    successMessage,
    errorMessage,
}