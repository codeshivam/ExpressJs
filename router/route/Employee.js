const exp = require('express')
const router = exp.Router()

router.get('/employee', (req,res)=>res.send('employee router'))
router.get('/employee/:id', (req,res)=>res.send('employee router with id'))
router.post('/employee', (req,res)=>res.send('employee post router'))
router.put('/employee', (req,res)=>res.send('employee router put'))
router.delete('/employee', (req,res)=>res.send('employee router delete'))

module.exports = router;