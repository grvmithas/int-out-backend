var mongoose = require('mongoose')
var { Schema } = mongoose

var callRequestSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    siteAddress: {
        type: String,
        required: true,
    },
    preferredCallTime: {
        type: Date,
    },
    description: {
        type: String,
    },

    callStatus: {
        type: String
    }
})

var CallRequest = mongoose.model('callRequest', callRequestSchema)
module.exports = { CallRequest }