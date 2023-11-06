const ApiError = require('../ApiError')

const checkAndThrowErrorIfParamNotPassed = (param, next, paramName) => {
    if (!param) {
        return next(ApiError.badRequest(`${paramName} not passed`))
    }
}

module.exports = checkAndThrowErrorIfParamNotPassed