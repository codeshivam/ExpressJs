//import express in es5 version
//const express = require('express');
//for using import like es6 like react use following in package.json
/*
"type": "module",
  "dependencies": {
    "express": "^5.0.0-alpha.8"
  }
*/

import express from 'express';

const app = express()
const port = 3000

//app.method for req and res

app.get('/', (req,res)=>{
    res.send("Hello Express")
    res.end()
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})