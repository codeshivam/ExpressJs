const {join} = require('path')
const student = (req,res)=>{
    //res.send('<h1>All Students</h1>');
    console.log(join(process.cwd(), 'views', 'student.html'))
    res.sendFile(join(process.cwd(), 'views', 'student.html'))
}

const studentOne = (req,res) => {
    const {id} = req.params
    res.sendFile(join(process.cwd(), 'views' , 'index.html'))

}

module.exports = {student,studentOne}