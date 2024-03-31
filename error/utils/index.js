const ApiError = require('../ApiError')

const checkAndThrowErrorIfParamNotPassed = (param, next, paramName = 'param') => {
    const checkIfEmpty = typeof param === 'object' 
    ? Object.keys(param).length
    : param;

    if (!checkIfEmpty) {
        return next(ApiError.badRequest(`${paramName} not passed`))
    }
}

module.exports = checkAndThrowErrorIfParamNotPassed