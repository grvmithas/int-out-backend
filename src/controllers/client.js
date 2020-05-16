var Client = require('../models/client')

async function getClients() {
    try {
        return await Client.find({}).exec()
    }
    catch (err) {
        return err
    }
}

async function updateClient(req) {
    try {
        var client = new Client(req.client)
        if (req.body["_id"]) {
            delete req.body._id
        }
        Object.keys(req.body).forEach(item => {
            client[item] = req.body.item
        })
        return await client.save()

    }
    catch (err) {
        return err
    }
}

async function addClient(req) {
    try {
        var client = new Client()
        Object.keys(req.body).forEach(item => {
            client[item] = req.body[item]
        })
        return await client.save()
    }
    catch (err) {
        return err
    }
}

async function deleteClient(id) {
    try {
        await Client.findByIdAndDelete(id)
    }
    catch (err) {
        return err
    }
}

module.exports = {
    addClient,
    deleteClient,
    updateClient,
    getClients
}