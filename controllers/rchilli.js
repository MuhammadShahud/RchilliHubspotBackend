const {rchilliService} = require('../services');


const rchilliApi = async(req,res) => {
    try {
        const response = await rchilliService.rChilliCall(req.body)
        console.log('response',response);
        res.send(response.data)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


module.exports = {rchilliApi}