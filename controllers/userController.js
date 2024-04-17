const userService = require("../service/user-service.js");
const { validationResult } = require('express-validator');
const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error: ', errors.array()))
            }

            const { nickname, password } = req.body;
            const userData = await userService.registration(nickname, password);

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json(userData);
        } catch(e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const { nickname, password } = req.body;
            const userData = await userService.login(nickname, password);

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.logout(refreshToken);

            res.clearCookie('refreshToken');

            res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json(userData);

        } catch (e) {
            next(e)
        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '222']);
        } catch(e) {
            next(e)
        }
    }
}

module.exports = new UserController();
