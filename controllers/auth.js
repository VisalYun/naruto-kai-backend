const _ = require('lodash')
const bcrypt = require('bcryptjs')

const User = require('../models/user')

const loginUser = async (name, password, res) => {
    let user = await User.findOne({ name: name })
    if (!user) {
        res.status(400).json({ message: "Wrong Name and Password!" })
        return
    }

    const passwordValidation = await bcrypt.compare(password, user.password)
    if (!passwordValidation) {
        res.status(400).json({ message: "Wrong Name and Password!" })
        return
    }

    const token = user.generateAuthToken()
    res.status(200).json({ message: "Login Success!", token: token })
}

const registerUser = async (user, res) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash

    user.save()
        .then(user => {
            const token = user.generateAuthToken()
            res.status(200).header('x-auth-token', token).json({ message: "Register successful!", user: _.pick(user, ['_id', 'name']) })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Something went wrong!" })
        })
}

module.exports = {loginUser, registerUser}