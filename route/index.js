const episodeRoute = require('../route/episode')
const arcRoute = require('../route/arc')
const authRoute = require('../route/auth')

module.exports = app => {
    app.use('/api/episodes', episodeRoute)
    app.use('/api/arcs', arcRoute)
    app.use('/api/', authRoute)
}