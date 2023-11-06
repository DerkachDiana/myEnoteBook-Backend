const checkAndThrowErrorIfParamNotPassed = require('../error/utils')
const { userId, categoryId } = require('./constants')

class todoCategoryController {
    async getTodoCategoriesByUserId(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[userId], next, userId);
    }

    async getTodoCategoryByCategoryId(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[categoryId], next, categoryId);
    }

    async addTodoCategory(req, res) {

    }

    async updateTodoCategory(req, res) {

    }

    async removeTodoCategoryById(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[categoryId], next, categoryId);
    }
}

module.exports = new todoCategoryController();