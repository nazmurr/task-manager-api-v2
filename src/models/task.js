const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    taskImg: {
        type: Buffer
    }
}, {
    timestamps: true,
    toObject: { virtuals: true }
})

taskSchema.virtual('hasTaskImg').get(function() {
    return this.taskImg ? true: false
})

taskSchema.methods.toJSON = function () {
    const task = this
    const taskObject = task.toObject()
    delete taskObject.id
    //delete taskObject.taskImg
    
    return taskObject
}

const Task = mongoose.model('Task', taskSchema)

module.exports = Task