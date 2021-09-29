const mongoose = require('mongoose')

const episodesSchema = mongoose.Schema({
    episode: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    arc: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    },
    thumbnail_url: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    video_url: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Episode', episodesSchema)