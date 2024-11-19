
const express = require('express')
const app = express();
const db = require('./Models/Database');
require('dotenv').config();
app.use(express.json())
const port = process.env.port||5000;


// middleware

const logRequest = (req,res,next)=>{
    console.log(`${(new Date().toLocaleString())} request made to:${req.originalUrl}`);
    next();
}

app.get('/',logRequest,(req,res)=>{
    res.send("welcome to node js series");
    console.log("this is middleware")
})

const userRouter = require('./routes/userRouter');
app.use('/person',userRouter);


app.listen(port,()=>{
    console.log("server started at port:",port);
})
//commit add for git status