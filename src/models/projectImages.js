var mongoose = require('mongoose')

var { Schema } = mongoose

var projectImagesSchema = new Schema({
  imageUrl: {
    type: String
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'project',
    required: true
  }
})

var projectImages = mongoose.model('projectImages', projectImagesSchema)

module.exports = projectImages
