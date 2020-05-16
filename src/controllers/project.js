var Project = require('../models/project')

async function getProjects() {
    try {
        return await Project.find({}).exec()
    }
    catch (err) {
        return err
    }
}

async function updateProject(req) {
    try {
        var Project = new Project(req.Project)
        if (req.body["_id"]) {
            delete req.body._id
        }
        Object.keys(req.body).forEach(item => {
            Project[item] = req.body.item
        })
        return await Project.save()
    }
    catch (err) {
        return err
    }
}

async function addProject(req) {
    try {
        var Project = new Project()
        Object.keys(req.body).forEach(item => {
            Project[item] = req.body[item]
        })
        return await Project.save()
    }
    catch (err) {
        return err
    }
}

async function deleteProject(id) {
    try {
        await Project.findByIdAndDelete(id)
    }
    catch (err) {
        return err
    }
}

module.exports = {
    addProject,
    deleteProject,
    updateProject,
    getProjects
}