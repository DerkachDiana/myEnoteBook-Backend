const Router = require('express')
const router = new Router()
const todoCategoryController = require('../controllers/todoCategoryController');

router.get('/:userId', todoCategoryController.getTodoCategoriesByUserId)
router.get('/:todoCategoryId', todoCategoryController.getTodoCategoryByCategoryId)
router.put('/add', todoCategoryController.addTodoCategory)
router.put('/update', todoCategoryController.updateTodoCategory)
router.delete('/removeById/:categoryId', todoCategoryController.removeTodoCategoryById)

module.exports = router
