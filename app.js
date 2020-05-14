var express = require('express')
require('dotenv').config()
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./src/routes/index')
var usersRouter = require('./src/routes/users')
var adminRouter = require('./src/routes/admin')

var app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/admin', adminRouter)
module.exports = app
