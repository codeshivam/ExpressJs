const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('All employee');
})

router.get('/:id([0-9]{2})',(req,res)=>{
    const {id} = req.params
    res.send(`Employee id : ${id}`);
})

module.exports = router
