var express = require('express')
var router = express.Router()
var authMiddleware = require('../middleware/auth')
var adminRouter = require('./admin')
var clientRouter = require('./client')
var projectRouter = require('./project')
var projectTypeRouter = require('./projectType')
var projectImagesRouter = require('./projectImages')
var callRequestRouter = require('./callRequest')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
router.use('/admin', adminRouter)
router.use(authMiddleware.authenticate)
router.use('/client', clientRouter)
router.use('/project', projectRouter)
router.use('/project-type', projectTypeRouter)
router.use('/project-images', projectImagesRouter)
router.use('/call-requests', callRequestRouter)

module.exports = router
