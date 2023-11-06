const Router = require('express')
const router = new Router()
const todoLayoutController = require('../controllers/todoLayoutController')

router.get('/getByCategoryId/:categoryId', todoLayoutController.getTodoLayoutsByCategoryId)
router.get('/getByUserId/:userId', todoLayoutController.getTodoLayoutsByUserId)
router.get('/getByTodoLayoutId/:todoLayoutId', todoLayoutController.getTodoLayoutById)
router.put('/add', todoLayoutController.addTodoLayout)
router.put('/update', todoLayoutController.updateTodoLayout)
router.delete('/removeById/:todoLayoutId', todoLayoutController.removeTodoLayoutById)
router.delete('/removeByCategoryId/:categoryId', todoLayoutController.removeTodoLayoutsByCategoryId)

module.exports = router
