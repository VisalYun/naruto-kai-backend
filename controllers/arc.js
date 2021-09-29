const Arc = require('../models/arc')

const getAllArc = async () => {
    const arcs = await Arc.find()
    return arcs
}

const getArc = async (id) => {
    const arc = await Arc.findOne({id: id})
    return arc
}

const updateArc = async (id, body) => {
    const arcId = await Arc.find({ id: id })
    const arc = await Arc.findByIdAndUpdate(
        arcId,
        {
            title: body.title,
            description: body.description
        },
        { new: true }
    )
    return arc
}

module.exports = {
    getAllArc,
    getArc,
    updateArc
}