const teacher = (req,res) => res.send('All student');
const oneTeacher = (req,res) => {
    const{id,city} = req.params;
    res.send(`Teacher ID: ${id} City: ${city}`)
}
module.exports = {teacher,oneTeacher}