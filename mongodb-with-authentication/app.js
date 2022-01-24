const express = require('express')
const app = express()
const connectDB = require('./db/connectdb')
const port = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb"

connectDB(DATABASE_URL)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))