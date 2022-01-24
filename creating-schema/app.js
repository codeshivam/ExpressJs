const express = require('express')
const {connectDB} = require('./db/connectdb')
const {createDoc} = require('./models/student.js')
const app = express()
const port = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'

connectDB(DATABASE_URL)

app.get('/', (req,res)=>{
    res.send('Creating Schema');
})
createDoc()

app.listen(port, ()=>console.log(`Listening at port${port}`))