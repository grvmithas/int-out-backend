var express = require('express')
var router = express.Router()
var controller = require('../controllers/client')
var ClientModel = require('../models/client')
var constants = require('../constants')

router.get('/', async function (req, res) {
    try {
        var data = await controller.getClients()
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/', async function (req, res) {
    try {
        var data = await controller.addClient(req)
        return res.status(201).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
})

router.use('/:id', function (req, res, next) {
    ClientModel.findById(req.params.id, (err, data) => {
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
        var data = await controller.updateClient(req)
        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/:id', async function (req, res) {
    try {
        var data = await controller.deleteClient(req.params.id)
        return res.status(200).json({ success: true, data })
    }
    catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router