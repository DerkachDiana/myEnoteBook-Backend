const checkAndThrowErrorIfParamNotPassed = require('../error/utils')
const { userId, categoryId, todoLayoutId } = require('./constants')
class todoLayoutController {
    async getTodoLayoutsByCategoryId(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[categoryId], next, categoryId)
    }

    async getTodoLayoutsByUserId(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[userId], next, userId)
    }

    async getTodoLayoutById(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[todoLayoutId], next, todoLayoutId)
    }

    async addTodoLayout(req, res) {

    }

    async updateTodoLayout(req, res) {

    }

    async removeTodoLayoutById(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[todoLayoutId], next, todoLayoutId)
    }

    async removeTodoLayoutsByCategoryId(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[categoryId], next, categoryId)
    }
}

module.exports = new todoLayoutController();
