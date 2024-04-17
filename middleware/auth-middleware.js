const ApiError = require("../error/ApiError")
const tokenService = require("../service/token-service")

module.exports = function(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return next(ApiError.UnauthorizedError())
        }

        const accessToken = authHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken);
        console.log('USERDATA', userData);
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData;
        next();
    } catch(e) {
        next(ApiError.UnauthorizedError())
    }
}