const {join} = require('path')
const student = (req,res) =>{
    res.sendFile(join(process.cwd(), 'views', 'student.html'))
}
module.exports = {student}