var mongoose = require('mongoose')

var { Schema } = mongoose

var clientSchema = new Schema({
  name: {
    type: String,
    required: true
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

var Client = mongoose.model('client', clientSchema)

module.exports = Client