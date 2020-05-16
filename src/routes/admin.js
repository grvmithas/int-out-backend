var express = require('express')
var router = express.Router()
var Admin = require('../models/admin')
var controller = require('../controllers/admin')
var authMiddleware = require('../middleware/auth')
var constants = require('../constants')
const { check, validationResult } = require('express-validator');

router.post("/signin", (req, res, next) => {
  Admin.findOne({ email: req.body.email }).then((admin) => {
    if (!admin) {
      res.status(404).json({ message: "email id not founnd" })
    } else {
      controller.signIn(admin, req.body.password).then((response) => {
        if (response.status === 401) {
          res.status(response.status).json({ message: constants.UNNAUTHRIZED_MESSAGE })
        } else {
          const { status, ...rest } = response
          res.status(status).json(rest)
        }
      }).catch(error => {
        return res.status(401).json(error)
      })
    }
  })
})

router.use(authMiddleware.authenticate)

router.post('/', [
  check('email', 'Email is required')
    .not()
    .isEmpty(),
  check('password', 'Password should be minimum 8 characters long')
    .not()
    .isEmpty()
    .isLength({ min: 8, })
], function (req, res, ) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }
  controller.createAdmin(req.body).then((data) => {
    res.status(201).json(data)
  }).catch(error => {
    res.json(error)
  })
})

router.get('/', function (req, res) {
  controller.getAdmins().then((admins) => {
    res.json(admins)
  })
})

router.use('/:id', function (req, res, next) {
  Admin.findById(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).json(err)
    } if (data) {
      req.admin = data
      return next()
    }
    return res.status(404).json({ message: constants.NOT_FOUND_MESSAGE })
  })
})

router.patch('/:id', function (req, res) {
  controller.updateAdmin(req).then(data => {
    res.json(data)
  }).catch(error => res.json(error))
})

router.delete('/:id', function (req, res) {
  controller.deleteAdmin(req.params.id).then(data => {
    res.json(data)
  }).catch(error => res.json(error))
})

module.exports = router
