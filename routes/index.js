const express = require('express')
const router = express.Router()
const todoRouter = require('./todoRouter')
const todoCategoryRouter = require('./todoCategoryRouter')
const todoLayoutRouter = require('./todoLayoutRouter')
const coverRouter = require('./coverRouter')
const userRouter = require('./userRouter');

router.use('/todo', todoRouter)
router.use('/todo_category', todoCategoryRouter)
router.use('/todo_layout', todoLayoutRouter)
router.use('/cover', coverRouter)
router.use('/auth', userRouter)

module.exports = router
