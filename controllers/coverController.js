const checkAndThrowErrorIfParamNotPassed = require('../error/utils')
const { coverId } = require('./constants')
class CoverController {
    async getCoverById(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[coverId], next, coverId)
    }

    async getCoverColorByCoverId(req,res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[coverId], next, coverId)
    }
}

module.exports = new CoverController();
