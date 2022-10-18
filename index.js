const express = require('express')

const User = require('./models/userSchema')
require('./connect');
const bodyparser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json())
app.get('/', (req, res) => res.send('Hello World'));

app.post('/create',async(req, res)=>{
    try{
        const user = new User({
            name: req.body.name,
            age: req.body.age
        })
        console.log('user :' . user)
        const response = await user.save()
        if(response){
            return res.json({
                data: response
            })
        }
    }catch(error){
        return res.json({err: error})
    }
})

// app.get('/get',async(req,res)=>{
//     try{
//         const allUser = await User.find().select('-_id name').exec()
//         if(allUser){
//             return res.json({
//                 data: allUser
//             })
//         }
//     }
//     catch(err){
//         return res.json({error: err})
//     }
// })


// app.get('/get-by-id/:id',async(req,res)=>{
//     try{
//         const singleUser = await User.findById(req.params.id).exec()
//         if(singleUser){
//             return res.json({
//                 data: singleUser
//             })
//         }
//     }
//     catch(err){
//         return res.json({error: err})
//     }
// })

// app.patch('/update-by-id/:id',async(req,res)=>{
//     try{
//         const id  = req.params.id
//         const updates = {
//             name : req.body.name
//         }
//         const options = {
//             new: true
//         }
//         const singleUser = await User.findByIdAndUpdate(id,updates, options).exec()
//         if(singleUser){
//             return res.json({
//                 data: singleUser
//             })
//         }
//     }
//     catch(err){
//         return res.json({error: err})
//     }
// })

// app.delete('/delete-by-id/:id',async(req,res)=>{
//     try{
//         const id  = req.params.id

//         const singleUser = await User.findByIdAndDelete({_id: id}).exec()
//         if(singleUser){
//             return res.json({
//                 data: "success"
//             })
//         }
//     }
//     catch(err){
//         return res.json({error: err})
//     }
// })


app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})
