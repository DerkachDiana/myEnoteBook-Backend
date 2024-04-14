const Router = require('express')
const router = new Router()
const todoCategoryController = require('../controllers/todoCategoryController');

router.get('/getByUserId', todoCategoryController.getTodoCategoriesByUserId)
router.get('/getByCategoryId', todoCategoryController.getTodoCategoryByCategoryId)
router.get('/chosenCategory', todoCategoryController.getChosenCategoryByUserId)
router.put('/add', todoCategoryController.addTodoCategory)
router.put('/update', todoCategoryController.updateTodoCategory)
router.delete('/removeById', todoCategoryController.removeTodoCategoryById)

module.exports = router
