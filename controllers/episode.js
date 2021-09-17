const Episode = require('../models/episode')

const getAllEpisode = async () => {
    const episodes = await Episode.find()
    return episodes
}

const getEpisode = async (id) => {
    const episode = await Episode.find({episode: id})
    return episode
}

module.exports = {
    getAllEpisode,
    getEpisode
}