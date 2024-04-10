const checkAndThrowErrorIfParamNotPassed = require('../error/utils')
const CONSTANTS = require('./constants')
const { TodoLayout } = require('../models/models')
const ApiError = require('../error/ApiError')

class todoLayoutController {
    async getTodoLayoutsByCategoryId(req, res, next) {
        const { categoryId } = req.query;
        console.log('this is category id', req.query);
        if (!categoryId) {
            checkAndThrowErrorIfParamNotPassed(categoryId, next, CONSTANTS.categoryId)

            return
        }

        try {
            const todoLayouts = await TodoLayout.findAll({
                where: {
                    todoCategoryId: categoryId
                }
            })

            res.json(todoLayouts)
        } catch(e) {
            return next(ApiError.badRequest(`Can not get todoLayout ${e}`))
        }
       
    }

    async getTodoLayoutsByUserId(req, res, next) {
        const { userId } = req.query;

        if (!userId) {
            checkAndThrowErrorIfParamNotPassed(userId, next, CONSTANTS.userId)

            return
        }

        try {
            const todoLayouts = await TodoLayout.findAll({
                where: {
                    userId
                }
            })

            res.json(todoLayouts)
        } catch(e) {
            return next(ApiError.badRequest(`Can not find todoLayout ${e}`))
        }

    }

    async getTodoLayoutById(req, res, next) {
        const { id } = req.query;

        if (!id) {
            checkAndThrowErrorIfParamNotPassed(id, next, CONSTANTS.todoLayoutId)
            return
        }

        try {
            const todoLayout = await TodoLayout.findOne({
                where: {
                    id
                }
            })

            res.json(todoLayout);
        } catch(e) {
            return next(ApiError.badRequest(`Can not find todoLayout ${e}`))
        }
        
    }

    async addTodoLayout(req, res, next) {
        const todoLayout = {
            ...req.body,
            todoCategoryId: req.body.categoryId
        }

        if (!Object.keys(todoLayout).length) {
            checkAndThrowErrorIfParamNotPassed(todoLayout, next, CONSTANTS.todoLayout)

            return
        }

        try {
            const todoLayoutCreatedStatus = await TodoLayout.create(todoLayout)

            res.json(todoLayoutCreatedStatus)
        } catch(e) {
            return next(ApiError.badRequest(`Can not create todoLayout ${e}`))
        }

    }

    async updateTodoLayout(req, res, next) {
        const updatedTodoLayout = {
            ...req.body,
            todoCategoryId: req.body.categoryId,
        }
        if (!Object.keys(updatedTodoLayout)) {
            checkAndThrowErrorIfParamNotPassed(updatedTodoLayout, next, CONSTANTS.todoLayout)

            return;
        }

        try {
            const todoLayoutUpdateStatus = await TodoLayout.update(updatedTodoLayout, {
                where: {
                    id: req.body.id,
                }
            })

            res.json(todoLayoutUpdateStatus)
        } catch(e) {
            return next(ApiError.badRequest(`Can not update todoLayout ${e}`))
        }

    }

    async removeTodoLayoutById(req, res, next) {
        const { id } = req.query;

        if (!id) {
            checkAndThrowErrorIfParamNotPassed(id, next, CONSTANTS.todoLayoutId)

            return;
        }

        try {
            const removeLayoutStatus = await TodoLayout.destroy({
                where: {
                    id
                }
            })

            res.json(removeLayoutStatus)
        } catch(e) {
            return next(ApiError.badRequest(`Can not remove todoLayout ${e}`))
        }
        
    }

    async removeTodoLayoutsByCategoryId(req, res, next) {
        const { categoryId } = req.body

        if (!categoryId) {
            checkAndThrowErrorIfParamNotPassed(categoryId, next, CONSTANTS.categoryId);

            return;
        }

        try {
            const removeTodoLayoutStatus = await TodoLayout.destroy({
                where: {
                    categoryId
                }
            })

            res.json(removeTodoLayoutStatus)
        } catch(e) {
            return next(ApiError.badRequest(`Can not remove todoLayouts ${e}`))
        }
        
    }
}

module.exports = new todoLayoutController();
