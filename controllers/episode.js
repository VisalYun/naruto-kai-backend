const Episode = require('../models/episode')

const getAllEpisode = async () => {
    const episodes = await Episode.find()
    return episodes
}

const getEpisode = async (id) => {
    const episode = await Episode.find({episode: id})
    return episode
}

const updateEpisode = async (id, body) => {
    const episodeId = await Episode.find({ episode: id })
    const episode = await Episode.findByIdAndUpdate(
        episodeId,
        {
            title: body.title,
            arc: body.arc,
            duration: body.duration,
            thumbnail_url: body.thumbnail_url,
            video_url: body.video_url,
            description: body.description
        },
        {new:true}
    )
    return episode
}

module.exports = {
    getAllEpisode,
    getEpisode,
    updateEpisode
}