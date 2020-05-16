var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

var { Schema } = mongoose

var clientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  logoImageUrl: {
    type: String
  }
})

clientSchema.plugin(uniqueValidator)
var Client = mongoose.model('client', clientSchema)

module.exports = Client