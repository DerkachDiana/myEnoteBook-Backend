const checkAndThrowErrorIfParamNotPassed = require('../error/utils')
const { todoLayoutId, todoId } = require('./constants')
class TodoController {
    async getTodoByLayoutId(req, res, next) {
    checkAndThrowErrorIfParamNotPassed(req.query[todoLayoutId], next, todoLayoutId);
    }

    async addTodo(req, res) {
    }

    async updateTodo(req, res) {

    }

    async removeTodoById(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[todoId], next, todoId);
    }

    async removeTodosByTodoLayoutId(req, res, next) {
        checkAndThrowErrorIfParamNotPassed(req.query[todoLayoutId], next, todoLayoutId);
    }
}

module.exports = new TodoController()
