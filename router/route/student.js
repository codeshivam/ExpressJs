const express = require('express') 
const router = express.Router()

router.get('/students', (req,res)=> res.send('Student route'))
router.get('/students/:id', (req,res)=> res.send('Student route with id'))

module.exports = router