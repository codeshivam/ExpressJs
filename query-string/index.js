const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req,res)=>res.send('Default'))
//query string
//use req.query for accessing query
app.get('/book',(req,res) => {
    const {catogery,id} = req.query
    res.send(`Book id: ${id} and Catogery: ${catogery}`)
})
app.get('/company',(req,res) => {
    const {catogery,id} = req.query
    res.send(`Company id: ${id} and Company: ${catogery}`)
})

app.get('/food',(req,res) => {
    const {type,id} = req.query
    res.send(`Food id: ${id} and Type: ${type}`)
})
app.listen(port, ()=>console.log(`Listening at post: ${port}`))