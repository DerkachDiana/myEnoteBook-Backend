const checkAndThrowErrorIfParamNotPassed = require('../error/utils');
const { Cover } = require('../models/models');
const CONSTANTS = require('./constants')
class CoverController {
    async getCoverById(req, res, next) {
        const { coverId } =req.query;

        if (!coverId) {
            checkAndThrowErrorIfParamNotPassed(coverId, next, CONSTANTS.coverId)

            return;
        }

        try {
            const cover = await Cover.findOne({
                where: {
                    id: coverId,
                }
            })

            res.json(cover);
        } catch(e) {
            return next(ApiError.badRequest('Can not get cover'))
        }
        
    }

    async getCoverColorByCoverId(req, res, next) {
        const { coverId } = req.query;

        if (!coverId) {
            checkAndThrowErrorIfParamNotPassed(coverId, next, CONSTANTS.coverId)

            return;
        }

        try {
            const cover = await Cover.findOne({
                where: {
                    id: coverId,
                }
            })

            res.json(cover.color);
        } catch(e) {
            return next(ApiError.badRequest('Can not get cover'))
        }
        
    }

    async getCovers(req, res, next) {
        try {
            const covers = await Cover.findAll()

            res.json(covers);
        } catch (e) {
            return next(ApiError.badRequest('Can not get covers'))
        }
    }
}

module.exports = new CoverController();
