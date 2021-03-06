const express = require('express')

const asyncHandler = require('../middlewares/async')

const router = express.Router()

const arcController = require('../controllers/arc')

// GET ALL

router.get('/', asyncHandler(async (req, res) => {
    const arcs = await arcController.getAllArc()
    res.status(200).json({ message: "Arcs Fetch Successfully", arcs: arcs })
}))

// GET BY ID

router.get('/:id', asyncHandler(async (req, res) => {
    const arc = await arcController.getArc(req.params.id)
    res.status(200).json({ message: "Arc Fetch Successfully", arcs: arc })
}))

// UPDATE

router.put('/:id', asyncHandler(async (req, res) => {
    const arc = await arcController.updateArc(req.params.id, req.body)
    res.status(200).json({ message: "Arcs Updated Successfully", arcs: arc })
}))

module.exports = router