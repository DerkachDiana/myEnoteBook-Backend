const express = require('express')
const router = express.Router()
const todoRouter = require('./todoRouter')
const todoCategoryRouter = require('./todoCategoryRouter')
const todoLayoutRouter = require('./todoLayoutRouter')
const coverRouter = require('./coverRouter')

router.use('/todo', todoRouter)
router.use('/todo_category', todoCategoryRouter)
router.use('/todo_layout', todoLayoutRouter)
router.use('/cover', coverRouter)

module.exports = router
