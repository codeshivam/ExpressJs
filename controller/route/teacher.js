const express= require('express')
const router = express.Router()
const {teacher,oneTeacher} = require('../logicController/teacherController')


router.get('/', teacher)
router.get('/:id([0-9]{3})/and/:city', oneTeacher)
module.exports = router