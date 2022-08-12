const express = require('express')
const router = express.Router()
const { hubspotController } = require('../../controllers')

// Getting all
// Creating one

router.route('/')
.post(hubspotController.hubspotApi)



module.exports = router