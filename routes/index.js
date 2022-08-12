const express = require('express');
const rchilliRoute = require('./rchilli/rchilli');
const hubspotRoute = require('./hubspot/hubspot');

const router = express.Router();

router.use('/rchilli', rchilliRoute);
router.use('/hubspot', hubspotRoute);


module.exports = router;