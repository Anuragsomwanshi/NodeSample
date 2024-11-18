
const express = require('express')
const port = 5000;
const app = express();
const db = require('./Models/Database');
app.use(express.json())

const userRouter = require('./routes/userRouter');
app.use('/person',userRouter);


app.listen(port,()=>{
    console.log("server started at port:",port);
})
//commit add for git status