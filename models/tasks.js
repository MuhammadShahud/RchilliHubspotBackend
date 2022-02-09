const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    Date:{
        type: Date,
        default: Date.now,
    }
    
})

module.exports = mongoose.model('Task', taskSchema)