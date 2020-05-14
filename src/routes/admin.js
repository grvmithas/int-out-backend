var express = require('express')
var router = express.Router()
var Admin = require('../models/admin')
var adminController = require('../controllers/admin')



router.post('/add', function (req, res, ) {
  adminController.createAdmin(req.body).then((data) => {
    res.status(201).json(data)
  }).catch(error => {
    res.json(error)
  })
})

router.get('/', async function (req, res) {
  adminController.getAdmins().then((admins) => {
    res.json(admins)
  })
})

router.use('/:id', function (req, res, next) {
  Admin.findById(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).json(err)
    } if (res) {
      req.admin = data
      return next()
    }
    return res.status(404)
  })
})

router.patch('/:id', async function (req, res) {
  adminController.updateAdmin(req).then(data => {
    res.json(data)
  }).catch(error => res.json(error))
})

module.exports = router
