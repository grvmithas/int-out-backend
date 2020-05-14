var mongoose = require('mongoose')

var { Schema } = mongoose

var projectTypeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  thumbnailImageUrl: {
    type: String
  }
})

var ProjectType = mongoose.model('projectType', projectTypeSchema)

module.exports = ProjectType
