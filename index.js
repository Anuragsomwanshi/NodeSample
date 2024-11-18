
const express = require('express')
const app = express();
const db = require('./Models/Database');
require('dotenv').config();
app.use(express.json())

const userRouter = require('./routes/userRouter');
app.use('/person',userRouter);


const port = process.env.port||5000;
app.listen(port,()=>{
    console.log("server started at port:",port);
})
//commit add for git status