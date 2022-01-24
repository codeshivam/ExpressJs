const mongoose = require('mongoose')

//defining schema

const studentSchema = new mongoose.Schema({
    name : {type: String, required : true, trim : true},
    age : {type : Number, required: true, min : 18, max:50},
    fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50 },
    isactive : {type:Boolean},
    comments : [{ value:{type:String}, publish:{type:Date, default:new Date} }],
    join: { type: Date, default: Date.now }
})

console.log(studentSchema.path('age'))

// Compiling Schema
const studentModel = mongoose.model('student', studentSchema)

//create new student

const createDoc = async () =>{
    try{
    const newStudent = new studentModel({
        name : 'shivam',
        age : 24,
        fees : 10245.20,
        isactive : true,
        comments: [{ value: 'This is good' }]
    })
    //saving doc
    const result = await newStudent.save()
    console.log(result)
    }catch(error){
        console.log(error)
    }

}

module.exports = {createDoc}

