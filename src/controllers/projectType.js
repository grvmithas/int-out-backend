var ProjectType = require('../models/projectType')

async function getProjectTypes() {
    try {
        return await ProjectType.find({}).exec()
    }
    catch (err) {
        return err
    }
}

async function updateProjectType(req) {
    try {
        var ProjectType = new ProjectType(req.ProjectType)
        if (req.body["_id"]) {
            delete req.body._id
        }
        Object.keys(req.body).forEach(item => {
            ProjectType[item] = req.body.item
        })
        return await ProjectType.save()

    }
    catch (err) {
        return err
    }
}

async function addProjectType(req) {
    try {
        var ProjectType = new ProjectType()
        Object.keys(req.body).forEach(item => {
            ProjectType[item] = req.body[item]
        })
        return await ProjectType.save()
    }
    catch (err) {
        return err
    }
}

async function deleteProjectType(id) {
    try {
        await ProjectType.findByIdAndDelete(id)
    }
    catch (err) {
        return err
    }
}

module.exports = {
    addProjectType,
    deleteProjectType,
    updateProjectType,
    getProjectTypes
}