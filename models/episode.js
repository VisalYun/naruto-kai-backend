const mongoose = require('mongoose')

const episodesSchema = mongoose.Schema({
    episode: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Episode', episodesSchema)