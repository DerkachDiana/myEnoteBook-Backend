const checkAndThrowErrorIfParamNotPassed = require('../error/utils')
const CONSTANTS = require('./constants')
const { TodoCategory } = require('../models/models');
const ApiError = require('../error/ApiError');

class todoCategoryController {
    async getTodoCategoriesByUserId(req, res, next) {
        const { userId } = req.query;
        if (!userId) {
            checkAndThrowErrorIfParamNotPassed(userId, next, CONSTANTS.userId);

            return;
        }

        try {
            const todoCategories = await TodoCategory.findAll({
                where: {
                    userId
                }
            })

            return res.json(todoCategories)
        } catch(e) {
            return next(ApiError.badRequest('Can not get todoCategoriesByUser'))
        }
       
    }

    async getTodoCategoryByCategoryId(req, res, next) {
        const { categoryId } = req.query;

        if (!categoryId) {
            checkAndThrowErrorIfParamNotPassed(categoryId, next, CONSTANTS.categoryId);

            return;
        }
        
        try {
            const todoCategory = await TodoCategory.findOne({
                where: {
                    id: categoryId
                }
            })

            return res.json(todoCategory)
        } catch(e) {
            return next(ApiError.badRequest('Can not get todoCategory'))
        }
    }

    async addTodoCategory(req, res, next) {
        const todoCategory = req.body;

        if (!Object.keys(todoCategory).length) {
            checkAndThrowErrorIfParamNotPassed(todoCategory, next, CONSTANTS.todoCategory)
            
            return;
        }

        try {
            const todoCategoryCreatedStatus = await TodoCategory.create(todoCategory)

            return res.json(todoCategoryCreatedStatus)
        } catch(e) {
            return next(ApiError.badRequest('Can not create todoCategory'))
        }
    }

    async updateTodoCategory(req, res, next) {
        const todoCategory = req.body;

        try {
            await TodoCategory.update({ name: todoCategory.name }, {
                where: {
                    id: todoCategory.id,
                }
            });

            res.json(todoCategory);
        } catch(e) {
            next(ApiError.badRequest('Can not update todoCategory'))
        }
    }

    async removeTodoCategoryById(req, res, next) {
        const { categoryId } = req.query

        if (!categoryId) {
            checkAndThrowErrorIfParamNotPassed(categoryId, next, CONSTANTS.categoryId);

            return;
        }
        
        try {
            const removeTodoCategoryStatus = await TodoCategory.destroy({
                where: {
                    id: categoryId,
                }
            })

            res.json(removeTodoCategoryStatus);
        } catch(e) {
            next(ApiError.badRequest('Can not delete todoCategory'))
        }
    }
}

module.exports = new todoCategoryController();