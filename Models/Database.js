const mongoose = require('mongoose');
require('dotenv').config();

const mongodb_url = process.env.db_url


// mongodb connection

// mongoose.connect()
mongoose.connect(mongodb_url)
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("error occur dut to this:",err);
})


// schema 

const userSchema = new mongoose.Schema({

    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
        unique:true,
    },
    Mobile:{
        type:Number,
        require:true,
    }
    

})

// Model

const person = mongoose.model('person',userSchema);
module.exports=person;