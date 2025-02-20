const express= require('express')
const app = express()
app.use(express.json())
const port=5000

const users=[
    {email:"adrina@gmail.com", password:"adz123"},
    {email:"hilda@gmail.com", password:"hil123"},
    {email:"bernadin@gmail.com", password:"ber123"},
    {email:"asher@gmail.com", password:"ash123"}

]

app.post('/login',(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email){
            return res.status(400).json({message:"Email cannot be empty"})
        }
        if(!password){
            return res.status(400).json({message:"Password cannot be empty"})
        }
        const user= users.find(user=>user.email===email && user.password===password);
        if (!user){
            return res.status(401).json({message:"User doesn't exit"})
        }
        res.json({message:"User logged in successfully"})
    }
    catch(err){
        return res.status(500).json({Error:err})
    }
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})