const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send('Hello world'))
//using param as id in url path
//app.get('/students/:id', (req, res) => {
//    res.send('Student '+req.params.id)
//})

app.get('/students/:id/:city', (req, res) => {
    res.send('Student '+req.params.id +req.params.city)
})
app.get('/students/:id/:name/:city', (req, res) => {
    //object destructure
    const {id, name,city} = req.params;
    res.send('Student name '+name +' city '+city)
})

//with regex to control params
app.get('/students/:id([0-9]{2})', (req, res) => {
    res.send('Student '+req.params.id)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))