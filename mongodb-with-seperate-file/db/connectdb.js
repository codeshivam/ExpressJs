const mongoose = require('mongoose')

const connectDB = (DATABASE_URL)=>{
    return mongoose.connect(DATABASE_URL).then(()=>{
        console.log('connected to db')
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectDB;