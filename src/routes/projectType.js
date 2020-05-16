var express = require('express')
var router = express.Router()
var controller = require('../controllers/projectType')
var ProjectTypeModel = require('../models/projectType')
var constants = require('../constants')

router.get('/', async function (req, res) {
    try {
        var data = await controller.getProjectTypes()
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/', async function (req, res) {
    try {
        var data = await controller.addProjectType(req)
        return res.status(201).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
})

router.use('/:id', function (req, res, next) {
    ProjectTypeModel.findById(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json(err)
        } if (data) {
            req.client = data
            return next()
        }
        return res.status(404).json({ message: constants.NOT_FOUND_MESSAGE })
    })
})

router.patch('/:id', async function (req, res) {
    try {
        var data = await controller.updateProjectType(req)
        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/:id', async function (req, res) {
    try {
        var data = await controller.deleteProjectType(req.params.id)
        return res.status(200).json({ success: true, data })
    }
    catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router 