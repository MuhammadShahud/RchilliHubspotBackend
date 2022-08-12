const { hubspotService } = require('../services');


const hubspotApi = async(req,res) => {
    try {
        console.log('req.body', req.body);
        const response = await hubspotService.hubspotCall(req.body)
        console.log('response', response);
        res.status(200).send(response.data)
    } catch (err) {
        console.log('err',err);
        res.status(400).json({ message: err.message })
    }
}


module.exports = {hubspotApi}