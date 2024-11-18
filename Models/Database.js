const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/New')
mongoose.connect('mongodb+srv://nodesample:nodesample1212@cluster0.taer1.mongodb.net/')
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