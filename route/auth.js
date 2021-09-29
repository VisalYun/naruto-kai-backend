const express = require('express')
const _ = require('lodash')

const asyncHandler = require('../middlewares/async')
const authController = require('../controllers/auth')

const User = require('../models/user')

const router = express.Router()

router.post('/login', asyncHandler(async (req, res) => {
    authController.loginUser(req.body.name, req.body.password, res)
}))

router.post('/register', asyncHandler(async (req, res) => {
    let user = await User.findOne({ name: req.body.name })
    if (user) {
        res.status(400).json({ message: "Name is already registered!" })
        return
    }

    user = new User(_.pick(req.body, ['name', 'password']))
    authController.registerUser(user, res)
}))

module.exports = router