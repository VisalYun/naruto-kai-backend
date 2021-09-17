const episodeRoute = require('../route/episode')
const arcRoute = require('../route/arc')

module.exports = app => {
    app.use('/api/episodes', episodeRoute)
    app.use('/api/arcs', arcRoute)
}