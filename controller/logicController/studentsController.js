const student = (req,res) => res.send('All student')

const oneStudent = (req,res) =>{
    const {id} = req.params;
    res.send(`Student ID: ${id}`);
}
const deleteOne = (req,res)=>{
    const{id} = req.params
    if(id==10){
        res.send(`ID : ${id} will not be deleted`)
    }
    else
        res.send(`ID: ${id} deleted`);
}
module.exports = {student, oneStudent,deleteOne}