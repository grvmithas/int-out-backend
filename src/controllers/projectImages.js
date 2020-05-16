var ProjectImages = require('../models/projectImages')

async function getProjectImagess() {
    try {
        return await ProjectImages.find({}).exec()
    }
    catch (err) {
        return err
    }
}

async function updateProjectImages(req) {
    try {
        var ProjectImages = new ProjectImages(req.ProjectImages)
        if (req.body["_id"]) {
            delete req.body._id
        }
        Object.keys(req.body).forEach(item => {
            ProjectImages[item] = req.body.item
        })
        return await ProjectImages.save()

    }
    catch (err) {
        return err
    }
}

async function addProjectImages(req) {
    try {
        var ProjectImages = new ProjectImages()
        Object.keys(req.body).forEach(item => {
            ProjectImages[item] = req.body[item]
        })
        return await ProjectImages.save()
    }
    catch (err) {
        return err
    }
}

async function deleteProjectImages(id) {
    try {
        await ProjectImages.findByIdAndDelete(id)
    }
    catch (err) {
        return err
    }
}

module.exports = {
    addProjectImages,
    deleteProjectImages,
    updateProjectImages,
    getProjectImagess
}