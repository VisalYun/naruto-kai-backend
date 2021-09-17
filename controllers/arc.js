const Arc = require('../models/arc')

const getAllArc = async () => {
    const arcs = await Arc.find()
    return arcs
}

const getArc = async (id) => {
    const arc = await Arc.findOne({id: id})
    return arc
}

module.exports = {
    getAllArc,
    getArc
}