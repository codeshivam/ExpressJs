const express = require('express')
const stu = require('./route/student')
const empl = require('./route/Employee')
const app = express()
const port = 3000
//for student router
app.use('/',stu);

//for employee router
app.use('/', empl)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))