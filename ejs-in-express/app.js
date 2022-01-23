const express = require('express')
const {join} = require('path')
const route = require('./routes/web')
const app = express()
const port = process.env.PORT || 3000
//view folder setup
app.set('views', './views')
//template engine setup
app.set('view engine', 'ejs')

//static files
app.use(express.static(join(process.cwd(),'public')))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', route);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))