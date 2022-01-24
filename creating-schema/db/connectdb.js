const mongoose = require('mongoose')
const connectDB = (DATABASE_URL)=>{
    const DB_OPTIONS = {
        user : 'shivam',
        pass : 'shivam',
        dbName : 'schooldb',
        authSource : 'schooldb'
    }

    return mongoose.connect(DATABASE_URL,DB_OPTIONS).then(()=>{
        console.log('Connected to db');
    }).catch(error =>{
        console.log(error)
    })
}

module.exports = {connectDB}