const express = require('express')

const asyncHandler = require('../middlewares/async')
const auth = require('../middlewares/auth')

const router = express.Router()

const episodeController = require('../controllers/episode')

// GET ALL

router.get('/', asyncHandler(async (req, res) => {
    const episodes = await episodeController.getAllEpisode()
    res.status(200).json({ message: "Episodes Fetch Successfully", episodes: episodes })
}))

// GET BY ID

router.get('/:id', asyncHandler(async (req, res) => {
    const episode = await episodeController.getEpisode(req.params.id)
    res.status(200).json({ message: "Episodes Fetch Successfully", episodes: episode })
}))

// UPDATE

router.put('/:id', auth, asyncHandler(async (req, res) => {
    const episode = await episodeController.updateEpisode(req.params.id, req.body)
    res.status(200).json({ message: "Episodes Update Successfully", episodes: episode })
}))

module.exports = router