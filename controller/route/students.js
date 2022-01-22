const express= require('express')
const router = express.Router()
const {student,oneStudent,deleteOne} = require('../logicController/studentsController')


router.get('/', student)
router.get('/:id([0-9]{3})',oneStudent)
router.get('/:id([0-9]{2})',deleteOne)
module.exports = router