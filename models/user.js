const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 320
    },
    isAdmin: Boolean
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, process.env.SECRET_KEY)
    return token
}

module.exports = mongoose.model('User', userSchema)