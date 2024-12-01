
const express = require('express')
const app = express();
const db = require('./Models/Database');
require('dotenv').config();
app.use(express.json())

const port = process.env.port||5000;
const person = require('./Models/Database');
const passport = require('passport');
const LocalStrategy =  require('passport-local').Strategy;

// middleware function



 passport.use(new LocalStrategy(async(username,password,done)=>{

    //authetication logic

    try{
        console.log("received creadientials ",username,password);
        const user = await person.findOne({userName:username});

        if(!user)
            return done(null,false,{msg:"incorrect username"});
        const ispasswordMatch = user.password ===password?true:false;


        if(ispasswordMatch){
            return done(null,user);
        }else{
            return done(null,false,{msg:"incorrect password"});
        }
        

    }catch(err){

        return done(err);


    }
 }))


 app.use(passport.initialize());

 const auth = passport.authenticate('local',{session:false});



app.get('/',auth,(req,res)=>{
    res.send("welcome to node js series");
    
})

const userRouter = require('./routes/userRouter');
app.use('/person',userRouter);



app.listen(port,()=>{
    console.log("server started at port:",port);
})
//commit add for git status