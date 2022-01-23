const express = require('express')
const router = express.Router()
const {homeController} = require('../controllers/home')
const {aboutController} = require('../controllers/about')

router.get('/about', aboutController)
router.get('/home', homeController)

module.exports = router;