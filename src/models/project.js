var mongoose = require('mongoose')

var { Schema } = mongoose

var projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  }, description: {
    type: String
  },
  projectType: {
    type: Schema.Types.ObjectId,
    ref: 'projectType',
    required: true,
  },
  budget: {
    type: Number,
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'client',
    required: true,
  }
})

var Project = mongoose.model('project', projectSchema)

module.exports = Project
