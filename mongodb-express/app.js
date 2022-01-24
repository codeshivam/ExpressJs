const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000

//connect to mongodb

mongoose.connect("mongodb://localhost:27017/schooldb").then(()=>{
    console.log('connected to db')
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))