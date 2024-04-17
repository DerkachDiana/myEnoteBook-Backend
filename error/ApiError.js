class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors) {
        super(message)
        this.status = status
        this.message = message
        this.errors = errors
    }

    static BadRequest(message, errors) {
        return new ApiError(400, message, errors)
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User is anauthorized')
    }
}

module.exports = ApiError
