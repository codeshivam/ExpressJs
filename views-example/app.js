const express = require('express')
const app = express()
const route = require('./routes/web')
const port = process.env.PORT || 3000

app.use('/students', route);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))