const express = require('express')
const router = express.Router()
const taskController = require('../controllers/tasks')

// Getting all
// Creating one

router.route('/')
.get(taskController.getTask)
.post(taskController.createTask)
.delete(taskController.removeAllTasks)


// Getting One
// Updating One
// Deleting One

router.route('/:id')
.get(taskController.getTaskById)
.patch(taskController.updateTask)
.delete(taskController.removeTask)


module.exports = router