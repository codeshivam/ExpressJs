//basic routing
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req,res) => res.send('About route'))
app.get('/books', (req,res) => res.send("Books route"))
app.get('/students', (req,res) => res.send('Students route'))
//more than one callback function
app.get('/more',(req,res) => res.send('First Callback'),
(req,res)=>res.send('more than one callback')
)
app.all('/*', (req,res)=>res.send('Page not found'))
app.delete('/about',(req,res)=>res.send('about Deleted'))
app.delete('/books',(req,res)=>res.send('books Deleted'))
app.delete('/students',(req,res)=>res.send('student Deleted'))
app.delete('/',(req,res)=>res.send('Deleted'))

//arrays of callback
const cb1 = (req,res) =>res.send('callback func1');
const cb2 = (req,res) =>res.send('callback func2');
const cb3 = (req,res) =>res.send('callback func3');
app.get('/callback', [cb1,cb2,cb3]);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
