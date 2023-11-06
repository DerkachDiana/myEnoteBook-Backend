const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/getByTodoLayoutId', todoController.getTodoByLayoutId)
router.put('/add', todoController.addTodo)
router.put('/update', todoController.updateTodo)
router.delete('/removeById', todoController.removeTodoById)
router.delete('/removeByTodoLayoutId', todoController.removeTodosByTodoLayoutId)

module.exports = router
