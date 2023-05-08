const express= require("express")
const app=express();
var cors = require('cors')
const port=process.env.PORT || 5000
app.use(cors())
app.use(express.json())


const users=[
    {
        user_id:1,
        name:"shimul1",
        email:"shimul1321@gmail.com"
    },
    {
        user_id:2,
        name:"shimul2",
        email:"shimul1322@gmail.com"
    },
    {
        user_id:3,
        name:"shimul3",
        email:"shimul1323@gmail.com"
    }
]

app.get('/',(req,res)=>{
    res.send("user management server is running")
})
 app.get('/users',(req,res)=>{
    res.send(users)
 })
 app.post('/users',(req,res)=>{
    console.log('Post Api Hitting')
    console.log(req.body);
    const newUser=req.body;
    newUser.user_id =users.length+1;
    users.push(newUser);
    res.send(newUser)
 })
 app.get('/users1',(req,res)=>{
    res.send(data)
 })
app.listen(port,()=>{
    console.log(`server is running o port ${port}`)
})