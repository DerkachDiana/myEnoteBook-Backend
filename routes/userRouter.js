const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { body } = require('express-validator')

router.post('/registration',
    body('nickname').isLength({ min: 3, max: 20 }),
    body('password').isLength({ min: 3, max: 20 }),
    userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router
