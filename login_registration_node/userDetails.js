const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema(
    {
   fname:String,
   lname:String,
   password:String,
},
{
    collection:"userInfo",
}
);

mongoose.model("UserInfo",userDetailsSchema);

