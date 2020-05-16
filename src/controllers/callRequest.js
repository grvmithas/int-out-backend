var CallRequest = require('../models/callRequest')

async function getCallRequests() {
    try {
        return await CallRequest.find({}).exec()
    }
    catch (err) {
        return err
    }
}

async function updateCallRequest(req) {
    try {
        var CallRequest = new CallRequest(req.CallRequest)
        if (req.body["_id"]) {
            delete req.body._id
        }
        Object.keys(req.body).forEach(item => {
            CallRequest[item] = req.body.item
        })
        return await CallRequest.save()
    }
    catch (err) {
        return err
    }
}

async function addCallRequest(req) {
    try {
        var CallRequest = new CallRequest()
        Object.keys(req.body).forEach(item => {
            CallRequest[item] = req.body[item]
        })
        return await CallRequest.save()
    }
    catch (err) {
        return err
    }
}

async function deleteCallRequest(id) {
    try {
        await CallRequest.findByIdAndDelete(id)
    }
    catch (err) {
        return err
    }
}

module.exports = {
    addCallRequest,
    deleteCallRequest,
    updateCallRequest,
    getCallRequests
}