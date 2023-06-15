const express = require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json);


const mongoUrl="mongodb+srv://nithin1418:nithin@1418@cluster0.z46yabm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");
})
.catch((e)=>console.log(e));

require("./userDetails")
const User = mongoose.model("UserInfo");
app.post("/post",async(req,res)=>{
    console.log(req.body);
    const{fname,lname,email,password}=req.body;

    try {
        await User.create({
            fname,
            lname,
            email,
            password,
        });
        res.send({status:"ok"})
    }catch (error){
        res.send({status:"error"})

    }


});
require("./userDetails");

// const User=mongoose.model("UserInfo");
// app.post("/register",async(req,res)=>{
//     const {name,email,mobileNO}=req.body;
//     try{
//         await User.create({
//             uname:name,
//             email,
//             mobileNO,
//         });
//         res.send({status:"ok"});
//     }catch(error){
//         res.send({status:"error"});

//     }
// });
