const express = require('express')
const router = express.Router()
const {student,studentOne} = require('../controllers/studentController')

router.get('/', student)
router.get('/:id', studentOne)
module.exports = router;