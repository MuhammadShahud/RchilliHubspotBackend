const taskServices = require('../services/task');



const getTask = async (req, res) => {
    try {
        const response = await taskServices.getTask();
        res.send(response);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getTaskById = async (req, res) => {
   try{
        const response = await taskServices.getTaskById(req.params.id);
        if(response==null){
            return res.status(404).json({ message: 'Cannot find Task' })
        }else{
        res.send(response)
        }
   } catch (err) {
       return res.status(500).json({ message: err.message })
   }  
}

const createTask = async(req,res) => {
    try {
        const response = await taskServices.createTask(req.body)
        res.status(201).send(response)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const updateTask = async(req,res)=> {
    try{
const response = await taskServices.updateTask(req.params.id,req.body);
res.send(response);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
}

const removeTask = async(req,res)=>{
    try{
const response = await taskServices.removeTask(req.params.id)
res.send('Deleted Task')
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

const removeAllTasks = async(req,res)=>{
    try{
const response = await taskServices.removeAllTasks();
res.send('All tasks deleted')
    }catch(err){
        res.status(500).send({message:err.message})
    }
}

module.exports = { getTask ,getTaskById , createTask, updateTask, removeTask, removeAllTasks}