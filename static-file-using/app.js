const express = require('express')
const app = express()
const {join} = require('path')
const stRoute = require('./routes/web')
const port = process.env.PORT || 3000
//using static file in express
app.use(express.static(join(process.cwd(), 'public')))
//app.use('/css', express.static(join(process.cwd(), 'public/css'))) //only css will be static
//app.use('/photo', express.static(join(process.cwd(), 'public/images'))) //only for images
//using student route
app.use('/students', stRoute);
app.get('/', (req, res) => res.send('Hello World!'))

//listening port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))