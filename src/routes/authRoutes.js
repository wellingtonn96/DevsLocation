const express = require('express');
const route = express.Router()

const authController = require('../controllers/authController')

route.post('/login', authController.login)

route.post('/register', authController.createUser)

module.exports = route