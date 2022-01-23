const express = require('express')
const router = express.Router()
const {student} = require('../controllers/studentController')
router.get('/',student);
module.exports = router;