const express = require('express')
const router = express.Router()
const { rchilliController } = require('../../controllers')

// Getting all
// Creating one

router.route('/')
.post(rchilliController.rchilliApi)



module.exports = router