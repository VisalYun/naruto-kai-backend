const mongoose = require('mongoose')
require('dotenv').config()

module.exports = function(){
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log(`Connected to Database`)
        })
}