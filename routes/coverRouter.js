const Router = require('express')
const router = new Router()
const coverController = require('../controllers/coverController')

router.get('/:coverId', coverController.getCoverById)
router.get('/colorById/:coverId', coverController.getCoverColorByCoverId)

module.exports = router