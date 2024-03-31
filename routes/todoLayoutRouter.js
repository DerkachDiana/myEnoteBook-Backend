const Router = require('express')
const router = new Router()
const todoLayoutController = require('../controllers/todoLayoutController')

router.get('/getByCategoryId', todoLayoutController.getTodoLayoutsByCategoryId)
router.get('/getByUserId', todoLayoutController.getTodoLayoutsByUserId)
router.get('/getByTodoLayoutId', todoLayoutController.getTodoLayoutById)
router.put('/add', todoLayoutController.addTodoLayout)
router.put('/update', todoLayoutController.updateTodoLayout)
router.delete('/removeById/:todoLayoutId', todoLayoutController.removeTodoLayoutById)
router.delete('/removeByCategoryId', todoLayoutController.removeTodoLayoutsByCategoryId)

module.exports = router
