
const bcrypt = require('bcrypt')
const saltRounds = 10

var Admin = require('../models/admin')

function createAdmin(fields) {
  if (fields.password) {
    return bcrypt.hash(fields.password, saltRounds).then(hash => {
      var admin = new Admin()
      admin.name = fields.name
      admin.password = hash
      admin.phone = fields.phone
      admin.email = fields.email
      admin.userName = fields.userName
      return admin.save().then((data) => {
        return data
      }).catch(err => err)
    }).catch(err => err)
  } else {
    throw new Error('password not provided!')
  }

}

function getAdmins() {
  return Admin.find({}).then((data) => {
    return data
  }).catch(err => {
    return err
  })
}

function updateAdmin(req) {
  var admin = new Admin(req.admin)
  //removing _id from body if it exists
  if (req.body['_id']) {
    delete req.body['_id']
  }
  if (req.body['password']) {
    return bcrypt.hash(req.body['password'], saltRounds).then(hash => {
      delete req.body['password']
      admin.password = hash
      Object.keys(req.body).forEach(item => {
        admin[item] = req.body[item]
      })
      return admin.save().then(data => data).catch(err => err)
    })
  } else {
    Object.keys(req.body).forEach(item => {
      admin[item] = req.body[item]
    })
    return admin.save().then(data => data).catch(err => err)
  }
}

module.exports = {
  createAdmin,
  getAdmins,
  updateAdmin
}
