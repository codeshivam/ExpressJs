const express = require('express')
const empRoute = require('./routes/employee')
const compRoute = require('./routes/company')
const app = express()
const port = 3000

app.get('/', (req, res,next) => {
    console.log('home')
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World! next')
})
app.use('/employees', empRoute)
app.use('/company',compRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))