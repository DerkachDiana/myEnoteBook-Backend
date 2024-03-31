const Router = require('express')
const router = new Router()
const coverController = require('../controllers/coverController')

router.get('/', coverController.getCoverById)
router.get('/colorById', coverController.getCoverColorByCoverId)

module.exports = router