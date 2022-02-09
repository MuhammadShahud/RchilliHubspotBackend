
const Task = require('../models/tasks')

const getTask = async()=>{
    return Task.find();
}

const getTaskById = async(id)=>{
    return Task.findById(id);
}

const createTask = async(body)=>{
    const task = await Task.create(body);
    return task;
}

const updateTask = async(id,body)=>{
    const task = await getTaskById(id);
    if(!task){
        return 'Cannot find Task' 
    } if (body.task != null) {
        task.task = body.task
    }
    const update = await task.save()
    return update
}

const removeTask = async(id)=>{
    const task = await getTaskById(id);
    if (!task) {
        return 'Cannot find Task'
    }
    const remove = await task.remove();
    return remove;
}

const removeAllTasks = async()=>{
    const removeAll = await Task.deleteMany();
    return removeAll
}
module.exports = {getTask, getTaskById, createTask, updateTask, removeTask, removeAllTasks} ;

