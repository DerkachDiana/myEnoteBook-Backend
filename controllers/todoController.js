const checkAndThrowErrorIfParamNotPassed = require('../error/utils')
const { todoLayoutId, todoId } = require('./constants')
const { Todo } = require('../models/models');
const ApiError = require('../error/ApiError');
class TodoController {
    async getTodoByLayoutId(req, res, next) {
        const { todoLayoutId } = req.query;

        try {
            const todos = await Todo.findAll({
                where: {
                    todoLayoutId,
                }
            })

            res.json(todos)
        } catch(e) {
            return next(ApiError.badRequest(`Can not get todos ${e}`))
        }
        
        res.json()

    }

    async addTodo(req, res, next) {
        if (!Object.keys(req.body).length) {
            checkAndThrowErrorIfParamNotPassed(req.body, next, 'todo')
            return
        }

        try {
            const todo = await Todo.create(req.body)

            return res.json(todo)
        } catch(e) {
            return next(ApiError.badRequest('Can not create todo', e))
        }
    }

    async updateTodo(req, res, next) {
        if (!Object.keys(req.body).length) {
            checkAndThrowErrorIfParamNotPassed(req.body, next, 'todo')
            return
        }

        try {
            const todo = await Todo.update(req.body, {
                where: {
                    id: req.body.id,
                }
            })

            res.json(todo)
        } catch(e) {
            return next(ApiError.badRequest(`Can not update todo ${e}`))
        }
    }

    async removeTodoById(req, res, next) {
        const { id } = req.query;

        if (!id) {
            checkAndThrowErrorIfParamNotPassed(req.query[todoId], next, todoId);  
            return;
        }
        
        const removedTodoStatus = await Todo.destroy({
            where: {
                id
            }
        })

        res.json(removedTodoStatus);
    }

    async removeTodosByTodoLayoutId(req, res, next) {
        const { todoLayoutId } = req.query;

        if (!todoLayoutId) {
            checkAndThrowErrorIfParamNotPassed(req.query[todoLayoutId], next, todoLayoutId);
            return;
        }
        
        const removedTodoStatus = await Todo.destroy({
            where: {
                todoLayoutId
            }
        })

        res.json(removedTodoStatus);
    }
}

module.exports = new TodoController()
