const homeController = (req,res)=>{
    res.render('index',{'name': 'Shivam'})
}
module.exports = {homeController}