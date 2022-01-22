const express = require('express')
const sturoute = require('./route/students')
const teacherRoute = require('./route/teacher')
const app = express()
const port = 3000
app.use('/students', sturoute)
app.use('/teachers', teacherRoute)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))